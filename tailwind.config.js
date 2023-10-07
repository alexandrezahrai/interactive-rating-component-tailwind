/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: "575px",
        lg: "992px",
        xl: "1358px",
      },
      container: {
        padding: {
          DEFAULT: "36px",
          md: "44px",
        },
      },
      colors: {
        "orange": "#FB7612",
        "whiteish": "#F7FDFF",
        "gray-light": "#7B8897",
        "gray-dark": "#262E38",
        "gray-text": "#8D939D",
      }
    },
  },
  plugins: [],
};
