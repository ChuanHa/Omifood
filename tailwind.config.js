/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
    },
    colors: {
      linen: "#fdf2e9",
      orange: "#e67e22",
      dorange: "#b45309",
      lorange: "#cf711f",
      ltorange: "#eb984e",
      white: "#ffffff",
      gray: "#555",
      dgray: "#333",
      lgray: "#ddd",
      ltgray: "#777",
      green: "#51cf66",
      lgreen: "#94d82d",
      yellow: "#ffd43b",
      brown: "#2e1907",
    },
  },
  plugins: [],
};
