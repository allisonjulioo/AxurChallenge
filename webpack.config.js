const dotenv = require('dotenv').config({path: __dirname + '/.env'});
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  stats: {
    modules: false,
  },
  infrastructureLogging: {
    level: 'error',
  },
  devServer: {
    stats: {
      colors: true,
      hash: false,
      version: false,
      timings: false,
      assets: false,
      chunks: false,
      modules: false,
      reasons: false,
      children: false,
      source: false,
      errors: false,
      errorDetails: false,
      warnings: false,
      publicPath: false,
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.parsed),
      'process.env.NODE_ENV': JSON.stringify(
        isDevelopment ? 'development' : 'production',
      ),
    }),
  ].filter(Boolean),
};
