// theme.js

export const darkTheme = {
  // ---- Core Background ----
  background: '#0B0F14', // deep neutral navy base
  backgroundGradient: ['#0B0F14', '#0F1720', '#141E28'], // subtle dark gradient
  cardBackground: '#121821', // elevated card surface
  codeBlocks: '#161E28', // slightly brighter for readability

  // ---- Primary Palette ----
  primary: '#00D4A3', // clean teal for key highlights
  secondary: '#009EFF', // accent blue for links, focus
  accent: '#FF4FA3', // pink-magenta for buttons and actions
  highlight: '#00C7FF', // cyan edge-glow for active states
  dim: '#2E3A46', // muted tone for dividers, meta

  // ---- Semantic Colors ----
  success: '#00E676', // green-teal success
  warning: '#FFB74D', // warm amber
  error: '#FF4D4D', // bright red

  // ---- Text Colors ----
  primaryText: '#E8F6F0', // readable bright text
  secondaryText: '#B5C8C2', // soft secondary
  subduedText: '#6E8280', // metadata / hints

  // ---- Borders & Shadows ----
  border: 'rgba(0, 212, 163, 0.15)', // teal border glow
  borderActive: 'rgba(0, 212, 255, 0.35)', // active focus glow
  shadow: 'rgba(0, 180, 200, 0.08)', // subtle ambient depth

  // ---- Component-Specific ----
  commandHighlight: '#F0A45B', // inline code, commands
  costText: '#00C7FF', // numeric or computed values
  buttonText: '#FFFFFF',
  pathText: '#A8F0E0',
  backgroundOverlay: 'rgba(12, 20, 25, 0.4)',
  pulseAnimation: 'rgba(0, 212, 163, 0.1)',
  bubbleColor: 'rgba(0, 160, 255, 0.35)',
  codeFlowColor: 'rgba(0, 255, 180, 0.35)',
  matrixColor: 'rgba(0, 255, 140, 0.7)',

  // ---- Gradients & Glow ----
rainbowGradient: [
  '#A8FFBF', // soft mint
  '#6BFF9C', // bright lime-green
  '#00E6A0', // teal-green
  '#009E80', // medium jade
  '#005F4A', // deep emerald
],

  // ---- Syntax Highlighting ----
  syntax: {
    comment: '#5C6B75',
    string: '#9EE6B8',
    keyword: '#9A7CFF',
    number: '#FFB26B',
    className: '#4FC3F7',
    function: '#67E8F9',
  },

  // ---- Mode Colors ----
  modes: {
    architect: '#00C7FF',
    code: '#00D4A3',
    debug: '#FF4D4D',
    task: '#4FC3F7',
    explain: '#FFB74D',
  },

  // ---- Typography ----
  fonts: {
    main: 'JetBrainsMono-Regular',
    title: 'Orbitron-Regular',
    architect: 'IBMPlexSerif-Regular',
    medium: 'System',
    monospace: 'JetBrainsMono-Regular',
  },
};

export const lightTheme = {
  // ---- Core Background ----
  background: '#F7FAFC',
  backgroundGradient: ['#FFFFFF', '#F1F5F7', '#E8EEEF'],
  cardBackground: '#FFFFFF',
  codeBlocks: '#F3F6F8',

  // ---- Primary Palette ----
  primary: '#009688',
  secondary: '#2196F3',
  accent: '#E91E63',
  highlight: '#00BCD4',
  dim: '#C4D0D3',

  // ---- Semantic ----
  success: '#00BFA5',
  warning: '#FFA726',
  error: '#E53935',

  // ---- Text ----
  primaryText: '#1C2624',
  secondaryText: '#4F5B58',
  subduedText: '#80908A',

  // ---- Border & Shadow ----
  border: 'rgba(0,0,0,0.08)',
  borderActive: 'rgba(0,0,0,0.25)',
  shadow: 'rgba(0,0,0,0.04)',

  // ---- UI ----
  commandHighlight: '#E07B39',
  costText: '#009688',
  buttonText: '#FFFFFF',
  pathText: '#009688',
  backgroundOverlay: 'rgba(255, 255, 255, 0.5)',
  pulseAnimation: 'rgba(0, 212, 163, 0.05)',
  bubbleColor: 'rgba(33, 150, 243, 0.3)',
  codeFlowColor: 'rgba(0, 200, 150, 0.3)',
  matrixColor: 'rgba(0, 255, 140, 0.6)',

  // ---- Gradient ----
  rainbowGradient: [
    '#00D4A3',
    '#00C7FF',
    '#009EFF',
    '#745CFF',
    '#FF4FA3',
  ],

  syntax: {
    comment: '#7A8F8A',
    string: '#4CAF50',
    keyword: '#7E57C2',
    number: '#F9A825',
    className: '#039BE5',
    function: '#26C6DA',
  },

  modes: {
    architect: '#00C7FF',
    code: '#00D4A3',
    debug: '#FF4D4D',
    task: '#4FC3F7',
    explain: '#FFB74D',
  },

  fonts: {
    main: 'JetBrainsMono-Regular',
    title: 'Orbitron-Regular',
    architect: 'IBMPlexSerif-Regular',
    medium: 'System',
    monospace: 'JetBrainsMono-Regular',
  },
};





export const getModeStyles = (theme) => ({
	architect: {
		accent: theme.modes.architect,
		font: "IBMPlexSerif-Regular",
	},
	code: {
		accent: theme.modes.code,
		font: "JetBrainsMono-Regular",
	},
	debug: {
		accent: theme.modes.debug,
		font: "VictorMono-Regular",
	},
	task: {
		accent: theme.modes.task,
		font: "Inter-Regular",
	},
	explain: {
		accent: theme.modes.explain,
		font: "Sora-Regular",
	},
})