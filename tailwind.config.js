module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-blue': '#0D1B2A',
        'accent-blue': '#00BFFF',
        'accent-yellow': '#FDCB58',
        'accent-orange': '#FF7E5F',
        'panel-bg': '#141E33',
        'border-color': '#1E3A5F',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'exo': ['Exo', 'sans-serif'],
      },
      boxShadow: {
        'glow-blue': '0 0 15px rgba(0, 191, 255, 0.3)',
        'glow-yellow': '0 0 15px rgba(253, 203, 88, 0.3)',
        'glow-orange': '0 0 15px rgba(255, 126, 95, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
} 