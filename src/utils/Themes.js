// Advanced Cyber Terminal Design System
export const darkTheme = {
    // Background colors - Deep terminal black with subtle variations
    bg: "#000000",
    bgLight: "#0a0e0a",
    background1: "#000000",
    background2: "#050a05",
    bgTerminal: "#001100",

    // Primary colors - Terminal green with cyan accents
    primary: "#00ff41",
    primaryDark: "#00cc33",
    primaryLight: "#33ff66",
    primaryGlow: "#00ff41",

    // Accent colors - Cyber terminal palette
    accent: "#00ffff", // Cyan
    accentSecondary: "#00ff41", // Terminal green
    accentTertiary: "#ff00ff", // Magenta
    neonCyan: "#00ffff",
    neonGreen: "#00ff41",
    neonPurple: "#b24bf3",
    neonPink: "#ff006e",

    // Text colors - High contrast terminal style
    text_primary: "#00ff41",
    text_secondary: "#00ffff",
    text_tertiary: "#00cc33",
    text_white: "#ffffff",
    text_dim: "#808080",

    // Card colors - Glassmorphism with terminal tint
    card: "rgba(0, 20, 0, 0.4)",
    card_light: "rgba(0, 30, 0, 0.3)",
    cardBorder: "#00ff41",
    cardHover: "rgba(0, 40, 0, 0.6)",
    cardGlass: "rgba(0, 20, 20, 0.2)",

    // Button colors
    button: "#00ff41",
    buttonHover: "#00ffff",
    buttonText: "#000000",
    buttonBorder: "#00ff41",

    // Utility colors
    white: "#ffffff",
    black: "#000000",

    // Terminal-inspired gradients
    gradient1: "linear-gradient(135deg, #00ff41 0%, #00ffff 50%, #00ff41 100%)",
    gradient2: "linear-gradient(135deg, #00ffff 0%, #b24bf3 50%, #ff006e 100%)",
    gradient3: "linear-gradient(90deg, rgba(0,255,65,0.2) 0%, rgba(0,255,255,0.2) 100%)",
    gradientTerminal: "linear-gradient(180deg, rgba(0,255,65,0.1) 0%, rgba(0,0,0,0) 100%)",
    gradientGlow: "radial-gradient(circle, rgba(0,255,65,0.3) 0%, rgba(0,0,0,0) 70%)",
    gradientCyan: "linear-gradient(135deg, #00ffff 0%, #00ff41 100%)",

    // Shadow colors - Terminal glow effects
    shadow: "rgba(0, 255, 65, 0.5)",
    shadowDark: "rgba(0, 0, 0, 0.9)",
    shadowCyan: "rgba(0, 255, 255, 0.5)",
    shadowGlow: "0 0 20px rgba(0, 255, 65, 0.6), 0 0 40px rgba(0, 255, 65, 0.4)",
    shadowCyanGlow: "0 0 20px rgba(0, 255, 255, 0.6), 0 0 40px rgba(0, 255, 255, 0.4)",

    // Border colors
    border: "#00ff41",
    borderLight: "rgba(0, 255, 65, 0.3)",
    borderCyan: "#00ffff",
    borderGlow: "rgba(0, 255, 65, 0.6)",

    // Glassmorphism tokens
    glassBlur: "blur(20px)",
    glassBlurHeavy: "blur(40px)",
    glassBackground: "rgba(0, 20, 20, 0.1)",
    glassBackgroundHeavy: "rgba(0, 20, 20, 0.3)",

    // CRT/Terminal effects
    scanlineOpacity: "0.05",
    phosphorGlow: "rgba(0, 255, 65, 0.15)",
    crtCurvature: "0.02",

    // Animation timings
    transitionFast: "0.2s ease",
    transitionMedium: "0.4s ease",
    transitionSlow: "0.6s ease",
    transitionBounce: "0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
}

export const lightTheme = {
    // Background colors - Clean cyber white
    bg: "#ffffff",
    bgLight: "#f0f8ff",
    background1: "#ffffff",
    background2: "#f5f9fc",
    bgTerminal: "#f0fff0",

    // Primary colors - Cyber teal
    primary: "#00cc88",
    primaryDark: "#00a36b",
    primaryLight: "#33d9a3",
    primaryGlow: "#00cc88",

    // Accent colors
    accent: "#0099ff",
    accentSecondary: "#00cc88",
    accentTertiary: "#b24bf3",
    neonCyan: "#00d9ff",
    neonGreen: "#00cc88",
    neonPurple: "#b24bf3",
    neonPink: "#ff006e",

    // Text colors
    text_primary: "#1a1a1a",
    text_secondary: "#4a4a4a",
    text_tertiary: "#808080",
    text_white: "#ffffff",
    text_dim: "#a0a0a0",

    // Card colors
    card: "rgba(255, 255, 255, 0.8)",
    card_light: "rgba(248, 249, 250, 0.7)",
    cardBorder: "rgba(0, 204, 136, 0.3)",
    cardHover: "rgba(255, 255, 255, 0.95)",
    cardGlass: "rgba(240, 248, 255, 0.5)",

    // Button colors
    button: "#00cc88",
    buttonHover: "#0099ff",
    buttonText: "#ffffff",
    buttonBorder: "#00cc88",

    // Utility colors
    white: "#ffffff",
    black: "#000000",

    // Gradients
    gradient1: "linear-gradient(135deg, #00cc88 0%, #0099ff 100%)",
    gradient2: "linear-gradient(135deg, #0099ff 0%, #b24bf3 100%)",
    gradient3: "linear-gradient(90deg, rgba(0,204,136,0.1) 0%, rgba(0,153,255,0.1) 100%)",
    gradientTerminal: "linear-gradient(180deg, rgba(0,204,136,0.1) 0%, rgba(0,0,0,0) 100%)",
    gradientGlow: "radial-gradient(circle, rgba(0,204,136,0.2) 0%, rgba(0,0,0,0) 70%)",
    gradientCyan: "linear-gradient(135deg, #00d9ff 0%, #00cc88 100%)",

    // Shadow colors
    shadow: "rgba(0, 204, 136, 0.3)",
    shadowDark: "rgba(0, 0, 0, 0.15)",
    shadowCyan: "rgba(0, 153, 255, 0.3)",
    shadowGlow: "0 0 20px rgba(0, 204, 136, 0.4), 0 0 40px rgba(0, 204, 136, 0.2)",
    shadowCyanGlow: "0 0 20px rgba(0, 153, 255, 0.4), 0 0 40px rgba(0, 153, 255, 0.2)",

    // Border colors
    border: "rgba(0, 204, 136, 0.2)",
    borderLight: "rgba(0, 204, 136, 0.1)",
    borderCyan: "#0099ff",
    borderGlow: "rgba(0, 204, 136, 0.4)",

    // Glassmorphism tokens
    glassBlur: "blur(20px)",
    glassBlurHeavy: "blur(40px)",
    glassBackground: "rgba(255, 255, 255, 0.3)",
    glassBackgroundHeavy: "rgba(255, 255, 255, 0.5)",

    // Animation timings
    transitionFast: "0.2s ease",
    transitionMedium: "0.4s ease",
    transitionSlow: "0.6s ease",
    transitionBounce: "0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
}
