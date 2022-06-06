const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath:'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,//正则
        use: ['style-loader', 'css-loader']//从右向左加载
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 18192,
              name:'img/[name]_[hash:8].[ext]'

              // esModule: false
            }
          }
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },{
        test:/\.vue$/,
        use:['vue-loader']
      }
    ]
  },
  resolve:{
    // alias 别名
    alias: {
      'vue$':'vue/dist/vue.esm.js'
    }
  }
}