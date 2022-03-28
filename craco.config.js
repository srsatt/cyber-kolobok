/* craco.config.js */
const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#51258f",
              "@background-color": "#141414",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
