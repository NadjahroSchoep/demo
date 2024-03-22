const { ModuleFederationPlugin } = require('webpack').container;
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const glob = require('glob');
const path = require('path');
const fs = require('fs');

// Attempt at module federation
module.exports = {
  entry: ["./public/js/app.js", "./public/js/ui.js"],
  mode: "development",
  devServer: {
    port: 3000,
    
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "chatwidget",
      remotes: {
        chatwidget: "chatwidget@http://localhost:4200/remoteEntry.mjs",
        auth: "auth@http://localhost:4201/remoteEntry.mjs",
        chat: "chat@http://localhost:4202/remoteEntry.mjs",
      },
    }),
    new ExternalTemplateRemotesPlugin(),
    // new HtmlWebpackPlugin({
    //   template: "./index.html",
    // }),
    new CopyPlugin({
      patterns: [
        { from: './auth_config.json', to: 'auth_config.json' },
        { from: './index.html', to: '' },
      ],
    }),
  ],
};