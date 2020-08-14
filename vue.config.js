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
  }
};
