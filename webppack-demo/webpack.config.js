const  path=require('path');

module.exports = {
    entry:'./src/index.js',
    output :{
        filename:'bundle.js',
        path:path.resolve(__dirname,"dist")
    },
    module:{
        rules : [
            {
                test: /\.css$/,
                use : ['style-loader','css-loader']
            },//加载css
            {
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
            },//加载文件
        ]
    }
};