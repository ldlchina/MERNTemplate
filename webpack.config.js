var webpack = require('webpack');

module.exports = {
  entry: [
    './public/index.js'
  ],
  output: {
    path: __dirname + '/public/bin',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test:/\.js$/,
        exclude:/node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015','react'],  // 这部分内容可以单独写成一个babelrc文件
          "env": {
          "development": {
          "plugins": [
            ["react-transform", {
              "transforms": [{
                    "transform": "react-transform-hmr",
                    "imports": ["react"],
                "locals": ["module"]
                }]
              }
            ]
          ]
          }
        }
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
        loader: 'url-loader'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: require.resolve("./public/3p/js/jquery-1.12.3.min.js"),
        loader: "expose-loader?$!expose-loader?jQuery!expose-loader?jquery"
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {  
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    colors: true,//终端中输出结果为彩色
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  } 
};
