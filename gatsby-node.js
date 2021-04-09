// You can delete this file if you're not using it
const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        assets: path.resolve(__dirname, 'src/assets'),
        components: path.resolve(__dirname, 'src/components'),
        pages: path.resolve(__dirname, 'src/pages'),
      },
    },
  })
}
