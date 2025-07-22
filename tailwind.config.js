module.exports = {
  content: ["./pages/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1a237e", // indigo-900 - Authority and trust foundation
          light: "#3949ab", // indigo-600 - Softer expertise moments
          50: "#e8eaf6", // indigo-50
          100: "#c5cae9", // indigo-100
          200: "#9fa8da", // indigo-200
          300: "#7986cb", // indigo-300
          400: "#5c6bc0", // indigo-400
          500: "#3f51b5", // indigo-500
          600: "#3949ab", // indigo-600
          700: "#303f9f", // indigo-700
          800: "#283593", // indigo-800
          900: "#1a237e", // indigo-900
        },
        accent: {
          DEFAULT: "#ff6f00", // orange-600 - Action and energy focus
          light: "#ffb74d", // orange-300
          dark: "#e65100", // orange-800
          50: "#fff3e0", // orange-50
          100: "#ffe0b2", // orange-100
          200: "#ffcc80", // orange-200
          300: "#ffb74d", // orange-300
          400: "#ffa726", // orange-400
          500: "#ff9800", // orange-500
          600: "#ff6f00", // orange-600
          700: "#f57c00", // orange-700
          800: "#e65100", // orange-800
          900: "#bf360c", // orange-900
        },
        background: "#fafafa", // gray-50 - Clean content canvas
        surface: "#ffffff", // white - Card and component depth
        text: {
          primary: "#212121", // gray-800 - Extended reading comfort
          secondary: "#757575", // gray-600 - Clear information hierarchy
        },
        success: "#2e7d32", // green-700 - Progress celebration
        warning: "#f57c00", // orange-700 - Helpful urgency
        error: "#d32f2f", // red-700 - Constructive concern
        border: {
          DEFAULT: "#e0e0e0", // gray-300
          focus: "#ff6f00", // orange-600
        },
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        normal: '400',
        semibold: '600',
        bold: '700',
        medium: '500',
      },
      boxShadow: {
        card: '0 4px 12px rgba(26, 35, 126, 0.1)',
      },
      transitionDuration: {
        smooth: '300ms',
        quick: '200ms',
        page: '400ms',
      },
      transitionTimingFunction: {
        'ease-out': 'ease-out',
      },
      borderWidth: {
        1: '1px',
        2: '2px',
      },
    },
  },
  plugins: [],
}