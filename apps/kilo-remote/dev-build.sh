#!/bin/bash
set -e

DEVICE_NAME="iPhone"
METRO_HOST="lan"
WAIT_TIME_METRO=10
MAX_RETRIES=12
WAIT_INTERVAL=5

cleanup() {
  if [[ -n "$METRO_PID" ]]; then
    echo "[INFO] Stopping Metro server (PID: $METRO_PID)..."
    kill "$METRO_PID" 2>/dev/null || true
    wait "$METRO_PID" 2>/dev/null || true
  fi
  echo "[INFO] Cleanup complete."
}
trap cleanup EXIT INT TERM

### --- STEP 1: HEADLESSLY START XCODE TO WAKE DAEMONS ---
echo "🛠️ [INFO] Starting Xcode in background to initialize wireless device services..."
open -g -a "Xcode"
sleep 10
echo "✅ [INFO] Xcode background services should now be running."

### --- STEP 2: PRE-WARM XCODE SERVICES ---
echo "🔧 [INFO] Pre-warming CoreDevice bridge..."
xcrun devicectl list devices > /dev/null 2>&1 || true
sleep 5

### --- STEP 3: WAIT FOR DEVICE TO APPEAR ---
echo "🔍 [INFO] Waiting for device '$DEVICE_NAME' to appear..."
found=false
for ((i=1; i<=MAX_RETRIES; i++)); do
  if xcrun devicectl list devices 2>/dev/null | grep -q "$DEVICE_NAME"; then
    echo "✅ [INFO] Device '$DEVICE_NAME' detected (wireless or USB)."
    found=true
    break
  fi
  echo "⏳ [WARN] Device not yet visible (attempt $i/$MAX_RETRIES). Retrying in ${WAIT_INTERVAL}s..."
  sleep $WAIT_INTERVAL
done

if [ "$found" = false ]; then
  echo "❌ [ERROR] Device '$DEVICE_NAME' not detected after $((MAX_RETRIES*WAIT_INTERVAL))s."
  echo "   Make sure your iPhone and Mac are on the same Wi-Fi network,"
  echo "   Developer Mode is enabled, and 'Connect via network' is checked in Xcode."
  exit 1
fi

### --- STEP 4: START METRO ---
echo "🚀 [INFO] Starting Expo Metro bundler..."
npx expo start --dev-client --host "$METRO_HOST" > metro.log 2>&1 &
METRO_PID=$!
echo "[INFO] Metro PID: $METRO_PID"

echo "[INFO] Waiting ${WAIT_TIME_METRO}s for Metro to initialize..."
sleep "$WAIT_TIME_METRO"

### --- STEP 5: BUILD & DEPLOY APP ---
echo "📱 [INFO] Building and deploying app to '$DEVICE_NAME'..."
if ! npx expo run:ios --device "$DEVICE_NAME"; then
  echo "❌ [ERROR] Failed to build or deploy app."
  exit 1
fi

echo "✅ [INFO] App successfully deployed to '$DEVICE_NAME'."
