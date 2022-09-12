const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { resourceUsage } = require('process');
// const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][contenthash].js',
    clean: true,
    // assetModuleFilename: "[name][ext]",
    // assetModuleFilename: "assets/image/[name][ext]",
    assetModuleFilename: pathData => {
      const filepath = path.dirname(pathData.filename).split('/').slice(1).join('/');
      console.log(filepath)
      return `${filepath}/[name][ext]`;
    },
  },
  devServer :{
    static:{
        directory: path.resolve(__dirname, 'dist')
    },
    port: 4000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true, 

  },

  module: {
    rules:[
        {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                }
            }
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource'
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
        title:'CV',
        filename:'index.html',
        template: 'src/index.html'
    }),

    // new CopyPlugin({
    //     patterns: [
    //         {
    //           from: "./src/assets/MythicCards",
    //           to: "assets/",
    //         },
    //       ],
    // }),

  ],

};