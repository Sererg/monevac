import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
export default {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(process.cwd(), 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|ico)$/i,
        type: 'asset/resource',
    },
      {
        test: /\.(sass|scss)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader',
            {
                loader: 'sass-loader',
                options: {
                  sassOptions: {
                    quietDeps: true, //отключает новые требования 
                  },
                },
              },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(process.cwd(), 'dist'),
    },
    open: true,
    port: 8080,
    hot: true,
  },
  mode: 'development',
};