import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withDelay,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');
const COLUMN_COUNT = 20;
const SYMBOLS = 'アァカサタナハマヤャラワン0123457890ABCDEFGHIJKLMNOPQRSTUVWXYZ$@#%&*+-';

const randomSymbol = () => SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];

const MatrixColumn = ({ index }) => {
  const progress = useSharedValue(0);
  const speed = 4000 + Math.random() * 4000; // each column falls at different speed
  const delay = Math.random() * 4000;        // stagger start times

  useEffect(() => {
    progress.value = withDelay(
      delay,
      withRepeat(withTiming(1, { duration: speed }), -1, false)
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      progress.value,
      [0, 1],
      [-height, height],
      Extrapolate.CLAMP
    );
    const opacity = interpolate(progress.value, [0, 0.2, 1], [0.2, 1, 0.2]);
    return {
      transform: [{ translateY }],
      opacity,
    };
  });

  const columnSymbols = Array.from({ length: 20 }, () => randomSymbol());

  return (
    <Animated.View
      style={[
        styles.column,
        animatedStyle,
        { left: (width / COLUMN_COUNT) * index },
      ]}
    >
      {columnSymbols.map((sym, i) => (
        <Text
          key={i}
          style={[
            styles.symbol,
            { color: i === columnSymbols.length - 1 ? '#CCFF99' : '#00FF41' },
          ]}
        >
          {sym}
        </Text>
      ))}
    </Animated.View>
  );
};

const MatrixBackground = () => {
  return (
    <View style={styles.container}>
      {Array.from({ length: COLUMN_COUNT }).map((_, i) => (
        <MatrixColumn key={i} index={i} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
    zIndex: -1,
    flexDirection: 'row',
  },
  column: {
    position: 'absolute',
    top: 0,
    width: width / COLUMN_COUNT,
    alignItems: 'center',
  },
  symbol: {
    fontSize: 16,
    fontWeight: 'bold',
    textShadowColor: '#00FF41',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
});

export default MatrixBackground;
