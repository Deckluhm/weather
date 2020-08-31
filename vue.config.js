module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "~bootstrap/scss/functions.scss";
          @import "~bootstrap/scss/variables.scss";
          @import "~bootstrap/scss/mixins.scss";
          @import "@/assets/scss/variables.scss";
        `
      }
    }
  },

  pwa: {
    name: "Weather",
    themeColor: "#ffffff",
    msTileColor: "#0d6efd",
    manifestOptions: {
      // eslint-disable-next-line @typescript-eslint/camelcase
      background_color: "#0d6efd"
    }
  }
};
