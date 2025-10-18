// theme.js

export const darkTheme = {
  // ---- Core Background ----
  background: '#081108', // deep dark green base
  backgroundGradient: ['#081108', '#0B1610', '#112218'], // smoother immersive depth
  cardBackground: '#0C1410', // cards slightly raised
  codeBlocks: '#0E1813', // readable contrast block

  // ---- Primary Palette ----
  primary: '#4DF4C0', // bright teal for titles and highlights
  secondary: '#78DCAA', // soft mint accent
  accent: '#FF4D8C', // magenta for actions (power, send)
  highlight: '#00E0E0', // cyan for links or active states
  dim: '#4C625A', // muted border / metadata tone

  // ---- Semantic Colors ----
  success: '#50FA7B',
  warning: '#FFD166',
  error: '#FF5555',

  // ---- Text Colors ----
  primaryText: '#CFFFE7', // bright readable text
  secondaryText: '#FFFFFF', // softer contrast for metadata
  subduedText: '#647E70', // tertiary text

  // ---- Effects / Border ----
  border: 'rgba(77,244,192,0.15)', // subtle neon border glow
  borderActive: 'rgba(255,77,140,0.4)', // glow for active focus
  shadow: 'rgba(0, 255, 200, 0.05)', // faint ambient depth

  // ---- Special Components ----
  commandHighlight: '#f08d49', // inline command text
  costText: '#00E0E0', // teal cyan for cost value

  // ---- Typography ----
  fonts: {
    main: 'JetBrainsMono-Regular',
    title: 'Orbitron-Regular',
    architect: 'IBMPlexSerif-Regular',
    medium: 'System',
  },
};

export const lightTheme = {
  background: '#F5F7FA',
  backgroundGradient: ['#FFFFFF', '#F0F4F3', '#E8EFEA'],
  cardBackground: '#FFFFFF',

  primary: '#009688',
  secondary: '#4CAF50',
  accent: '#E91E63',
  highlight: '#00BCD4',
  dim: '#9E9E9E',

  success: '#06D6A0',
  warning: '#FFD166',
  error: '#EF476F',

  primaryText: '#212529',
  secondaryText: '#4E5D52',
  subduedText: '#888',

  border: 'rgba(0,0,0,0.1)',
  borderActive: 'rgba(0,0,0,0.25)',
  shadow: 'rgba(0,0,0,0.05)',

  commandHighlight: '#f08d49',
  costText: '#009688',

  fonts: {
    main: 'JetBrainsMono-Regular',
    title: 'Orbitron-Regular',
    architect: 'IBMPlexSerif-Regular',
    medium: 'System',
  },
};
