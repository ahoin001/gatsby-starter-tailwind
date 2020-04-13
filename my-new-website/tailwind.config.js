// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        roboto: ["roboto", "sans-serif"],
        roboto: ["montserrat", "sans-serif"]
      }
    }
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
