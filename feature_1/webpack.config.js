const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "feature_1",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        library: { type: "module" },

        // For remotes (please adjust)
        name: "feature_1",
        filename: "feature_1.js",
        exposes: {
            'content': './src/app/content/content.module.ts',
        },

        // For hosts (please adjust)
        // remotes: {
        //     "mfe1": "http://localhost:3000/remoteEntry.js",

        // },

        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true },
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true },
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true },
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true },
          "@angular/animations": { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true },
          "@angular/forms": { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true },
          "@angular/material": { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true },
          rxjs: { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true },

          ...sharedMappings.getDescriptors()
        })

    }),
    sharedMappings.getPlugin()
  ],
};
