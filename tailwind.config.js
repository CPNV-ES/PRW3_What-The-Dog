const theme = require("./theme.json");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: theme.colors.primary.main,
      },
    },
  },
  plugins: [],
};
