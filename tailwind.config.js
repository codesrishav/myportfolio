/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        'blink-gradient': 'blinker 2s linear infinite',
        glow: 'glow 2s ease-in-out infinite',
        'fade-left': 'fadeLeft 1s ease-out',
        'fade-right': 'fadeRight 1s ease-out',
        'pulse-gradient': 'pulseGradient 6s ease-in-out infinite',
        float: 'float 3s ease-in-out infinite',               // ✅ Floating animation
        wiggle: 'wiggle 1s ease-in-out infinite',             // ✅ Wiggle animation
        'bounce-slow': 'bounceSlow 2s infinite',              // ✅ Custom slower bounce
      },
      keyframes: {
        blinker: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        glow: {
          '0%, 100%': { boxShadow: "0 0 20px #f97316" },
          '50%': { boxShadow: "0 0 30px #f59e0b" },
        },
        fadeLeft: {
          '0%': { opacity: 0, transform: 'translateX(-50px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeRight: {
          '0%': { opacity: 0, transform: 'translateX(50px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        pulseGradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15%)' },
        },
      },
      colors: {
        customblue: "#0ea5e9",
        custompurple: "#8b5cf6",
      },
      fontFamily: {
        dancing: ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
};
