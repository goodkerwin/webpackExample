const  path=require('path');
const  HtmlWebpackPlugin = require('html-webpack-plugin');
const  CleanWebpackPlugin = require('clean-webpack-plugin');
const  webpack = require ('webpack');

module.exports = {
    // entry:'./src/index.js',
    entry: {
        // app: './src/index.js',
        // print: './src/js/print.js',
        app: './src/index.js'
    },
    output :{
        // filename:'bundle.js',
        filename: '[name].bundle.js',
        path:path.resolve(__dirname,"dist"),
       // publicPath: './'
    },
    devtool: 'none',
    devServer: {
        contentBase : './dist', //web服务器自动重新加载编译后代码
        hot: true
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),//清理dist文件夹
        new HtmlWebpackPlugin({
            title : 'Hot Module Replacement'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module:{
            rules : [
                {
                    test: /\.css$/,
                    use : ['style-loader','css-loader']
                },//加载css
            /*  {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: ['file-loader']
                },//加载图片
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: ['file-loader']
                },//加载字体
                {
                    test: /\.(csv|tsv)$/,
                    use: ['csv-loader']
                },
                {
                    test: /\.xml$/,
                    use: ['xml-loader']
                },//加载文件*/
            ]
        }
};