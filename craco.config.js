const reactHotReloadPlugin = require('craco-plugin-react-hot-reload')

module.exports = {
  eslint: {
    mode: 'file',
  },
  plugins: [
    {
      plugin: reactHotReloadPlugin,
    },
  ],
}
