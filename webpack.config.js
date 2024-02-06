const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  // Other webpack configuration options...
  plugins: [
    new ModuleFederationPlugin({
      name: 'chatwidget',
      remotes: {
        'chatwidget': 'chatwidget@http://localhost:4200/main.js',
      },
    }),
  ],
};