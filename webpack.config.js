const path = require('path');
const os = require('os');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

const choiceBraised = () => {
  const dafaultBrauser = 'Chrome' || 'Firefox';
  const platform = os.platform();
  if (platform === 'darwin') {
    return 'Safari';
    console.log(`you use OS darvin  your brauser Safari`);
  } else if (os.platform() === 'win32') {
    return 'Edge';
    console.log(`you use  OS Windows  your brauser Edge`);
  }
  return dafaultBrauser;
  console.log(` your brauser on ${dafaultBrauser}`);
};

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: './index.js',
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'build'),
  },
  devServer: {
    port: 4200,
    open: choiceBraised(),
  },

  resolve: {
    extensions: ['.js', '.json', '.png', '.jpg', '.css', '.scss', 'sass'],
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'new title',
      template: './index.html',
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src'),
        to: path.resolve(__dirname, 'src'),
        ignore: ['*test*.jpg'],
      },
    ]),
    new MiniCssExtractPlugin({
      filename: filename('css'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg|gif|jpeg)$/,
        use: ['file-loader'],
      },
      {
        test: /\.xml$/,
        use: ['xml-loader'],
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
