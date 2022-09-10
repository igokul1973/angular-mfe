const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]
);

module.exports = {
  output: {
    uniqueName: "host",
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
        // name: "host",
        // filename: "remoteEntry.js",
        // exposes: {
        //     './Component': './/src/app/app.component.ts',
        // },

        // For hosts (please adjust)
        remotes: {
            // "feature_1": "http://localhost:4201/feature_1.js",
        },

        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true },
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true },
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true },
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true },
          "@angular/animations": { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true },
          "@angular/forms": { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true },
          "@angular/material": { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true },
          rxjs: { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true },
          favorites: { singleton: true, strictVersion: true, requiredVersion: '0.0.1', eager: true },

          ...sharedMappings.getDescriptors()
        })

    }),
    sharedMappings.getPlugin()
  ],
};
