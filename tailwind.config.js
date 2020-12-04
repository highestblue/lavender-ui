module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary, hsl(258, 48%, 50%))",
        secondary: "var(--color-secondary, hsl(196, 61%, 50%))",
        tertiary: "var(--color-tertiary, hsl(337, 92%, 50%))",
        quaternary: "var(--color-quaternary, hsl(60, 100%, 50%))",
        success: "var(--color-success, hsl(140, 29%, 50%))",
        info: "var(--color-info, hsl(182, 36%, 50%))",
        warning: "var(--color-warning, hsl(26, 74%, 50%))",
        danger: "var(--color-danger, hsl(350, 100%, 50%))",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
