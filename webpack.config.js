const CopyPlugin = require("copy-webpack-plugin");
const { EnvironmentPlugin } = require("webpack");
const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const StandaloneSingleSpaPlugin = require("standalone-single-spa-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const appConfig = require("./src/config/app.config");

module.exports = (webpackConfigEnv, argv) => {
  console.log("argv", argv);
  const port = argv.port ? argv.port : 8080;

  console.log("port", port);

  const defaultConfig = singleSpaDefaults({
    orgName: `${appConfig.orgName}`,
    projectName: `${appConfig.context}-${appConfig.appName}`,
    webpackConfigEnv,
    argv,
  });

  defaultConfig.externals = [];

  let plugins = [
    new CopyPlugin([
      { from: "public", to: "./src/assets/public" },
      { from: "public", to: "./" },
    ]),
    new EnvironmentPlugin({
      REACT_APP_ENV: "dev",
      CLOUDFRONT_URL: `http://localhost:${port}`,
    }),
  ];

  if (argv.env.WEBPACK_BUILD && argv.env.standalone) {
    // the standalone plugin works in conjunction with HtmlWebpackPlugin
    plugins.push(new HtmlWebpackPlugin());
    plugins.push(
      new StandaloneSingleSpaPlugin({
        appOrParcelName: `@${appConfig.orgName}/${appConfig.context}-${appConfig.appName}`,
        activeWhen: ["/"],
        // package.json. If this doesn't work for you, pass in your HtmlWebpackPlugin
        // to ensure the correct one is being referenced
        HtmlWebpackPlugin,
        importMapOverrides: false,
      })
    );
  }

  return merge(defaultConfig, {
    plugins: plugins,
    // modify the webpack config however you'd like to by adding to this object
    // css-loader to bundle all the css files into one file and style-loader to add all the styles  inside the style tag of the document
    entry: path.resolve(__dirname, "src/index"),
    resolve: {
      extensions: [".ts", ".js", ".tsx", ".jsx"],
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        // css-loader to bundle all the css files into one file and style-loader to add all the styles  inside the style tag of the document
        {
          test: /\.(css|scss)$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: "file-loader",
            },
          ],
        },
      ],
    },
  });
};
