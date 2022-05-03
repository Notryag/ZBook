const CracoLessPlugin = require('craco-less');
const path = require("path")
const resolve = function (dir) {
      return path.resolve(__dirname, dir)
}
module.exports = {
  webpack: {
    alias: {
          "@": resolve('src'),
          "components": resolve('src/components')
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};