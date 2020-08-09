module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/assets/scss/variables.scss";
        `
      }
    }
  },

  pwa: {
    themeColor: "#5a9cfe",
    msTileColor: "#5a9cfe",
    manifestOptions: {
      // eslint-disable-next-line @typescript-eslint/camelcase
      background_color: "#5a9cfe"
    }
  }
};
