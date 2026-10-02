export default {
  prefix: "tw-",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#030712",
        foreground: "#f2f0e8",
        "hero-sub": "#94a3b8",
        "accent-primary": "#3b82f6",
        "accent-hover": "#60a5fa",
        "accent-glow": "rgba(59,130,246,0.3)",
        "accent-purple": "#a855f7",
        "warm-highlight": "#fcd34d",
        "dark-card": "rgba(255,255,255,0.03)",
        "dark-border": "rgba(255,255,255,0.06)",
        success: "#10b981",
        danger: "#ef4444",
        warning: "#f59e0b",
        "glass-bg": "rgba(255,255,255,0.04)",
        "glass-border": "rgba(255,255,255,0.08)",
        "glass-hover": "rgba(255,255,255,0.08)",
        "deep-blue": "#0B1528",
        "mid-blue": "#060C1A",
      },
      fontFamily: {
        geist: ["Geist Sans", "sans-serif"],
        general: ["General Sans", "sans-serif"],
        brand: ["Space Grotesk", "sans-serif"],
      },
      fontSize: {
        hero: ["5rem", { lineHeight: "1", fontWeight: "800" }],
        "hero-mobile": ["3.5rem", { lineHeight: "1", fontWeight: "800" }],
        h2: ["2.75rem", { lineHeight: "1.2", fontWeight: "700" }],
        h3: ["2rem", { lineHeight: "1.3", fontWeight: "600" }],
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-up": "slideUp 0.6s ease forwards",
        "gradient-shift": "gradientShift 4s ease infinite",
        float: "float 6s ease-in-out infinite",
        "glass-shine": "glassShine 8s ease-in-out infinite",
        "subtle-pulse": "subtlePulse 4s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glassShine: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        subtlePulse: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};
