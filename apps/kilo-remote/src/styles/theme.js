// theme.js

export const darkTheme = {
	// ---- Core Background ----
	background: "#0A0F0C", // dark neutral greenish-black base
	backgroundGradient: ["#0A0F0C", "#0E1510", "#122018"], // subtle gradient depth
	cardBackground: "#101813", // card surface with gentle contrast
	codeBlocks: "#121E18", // slightly brighter for readability

	// ---- Primary Palette ----
	primary: "#5FF2C8", // bright mint-teal for main accents
	secondary: "#48D8A4", // secondary mint tone
	accent: "#FF4D8C", // vibrant magenta for actions
	highlight: "#00D5FF", // cyan pop for links and selection
	dim: "#4C625A", // neutral muted tone for dividers

	// ---- Semantic Colors ----
	success: "#50FA7B",
	warning: "#FFD166",
	error: "#FF5555",

	// ---- Text Colors ----
	primaryText: "#E6FFF4", // main body text
	secondaryText: "#B7E3CD", // softer secondary tone
	subduedText: "#6C8F7C", // tertiary metadata text

	// ---- Border / Shadows ----
	border: "rgba(95, 242, 200, 0.12)", // faint mint border
	borderActive: "rgba(255, 77, 140, 0.35)", // pink active glow
	shadow: "rgba(0, 255, 200, 0.05)", // ambient glow depth

	// ---- UI Components ----
	commandHighlight: "#E6A66D", // inline command / code span
	costText: "#00E0E0", // numeric info
	buttonText: "#FFFFFF",
	pathText: "#C4FCDC",
	backgroundOverlay: "rgba(8, 17, 8, 0.3)",
	pulseAnimation: "rgba(204,169,44, 0)",
	bubbleColor: "rgba(0, 160, 255, 0.35)",
	codeFlowColor: "rgba(0, 255, 122, 0.4)",
	matrixColor: "rgba(0, 255, 0, 0.65)",

	// ---- Gradients / Effects ----
	rainbowGradient: ["#5FF2C8", "#00D5FF", "#4A8FFF", "#906CFF", "#E94DFB", "#FF4D8C"],

	// ---- Syntax Highlighting ----
	syntax: {
		comment: "#708070",
		string: "#98E6A8",
		keyword: "#C586C0",
		number: "#E6A66D",
		className: "#E6A66D",
		function: "#67D9D9",
	},

	// ---- Mode Colors ----
	modes: {
		architect: "#FF4D8C",
		code: "#48D8A4",
		debug: "#FF5555",
		task: "#50FA7B",
		explain: "#FFD166",
	},

	// ---- Typography ----
	fonts: {
		main: "JetBrainsMono-Regular",
		title: "Orbitron-Regular",
		architect: "IBMPlexSerif-Regular",
		medium: "System",
	},
}

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

export const lightTheme = {
	// ---- Core Background ----
	background: "#F5F7F6",
	backgroundGradient: ["#FFFFFF", "#F0F4F3", "#E8EFEA"],
	cardBackground: "#FFFFFF",
	codeBlocks: "#F3F7F5",

	// ---- Primary Palette ----
	primary: "#009688",
	secondary: "#4CAF50",
	accent: "#E91E63",
	highlight: "#00BCD4",
	dim: "#B0BDB6",

	// ---- Semantic ----
	success: "#06D6A0",
	warning: "#FFD166",
	error: "#EF476F",

	// ---- Text ----
	primaryText: "#1F2D27",
	secondaryText: "#4E5D52",
	subduedText: "#7A8E83",

	// ---- Border / Shadows ----
	border: "rgba(0,0,0,0.1)",
	borderActive: "rgba(0,0,0,0.25)",
	shadow: "rgba(0,0,0,0.05)",

	// ---- UI ----
	commandHighlight: "#D47539",
	costText: "#009688",
	buttonText: "#fff",
	pathText: "#00796B",
	backgroundOverlay: "rgba(255, 255, 255, 0.6)",
	pulseAnimation: "rgba(204,169,44, 0)",
	bubbleColor: "rgba(0, 122, 255, 0.4)",
	codeFlowColor: "rgba(0, 255, 122, 0.4)",
	matrixColor: "rgba(0, 255, 0, 0.7)",

	// ---- Gradient ----
	rainbowGradient: ["#4DF4C0", "#00E0E0", "#3AA8FF", "#7A79FF", "#A46AFF", "#FF79C6"],

	syntax: {
		comment: "#999",
		string: "#7ec699",
		keyword: "#cc99cd",
		number: "#f08d49",
		className: "#f08d49",
		function: "#67cdcc",
	},

	modes: {
		architect: "#FF4473",
		code: "#78DCAA",
		debug: "#FF5555",
		task: "#50FA7B",
		explain: "#FFD166",
	},

	fonts: {
		main: "JetBrainsMono-Regular",
		title: "Orbitron-Regular",
		architect: "IBMPlexSerif-Regular",
		medium: "System",
	},
}
