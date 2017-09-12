'use strict';

const webpack = require('webpack');

const path = require('path');

const paths = {
    context: path.resolve(__dirname, 'src'),
    output: {
        path: path.resolve(__dirname, 'src/dist'),
    }
};

let config = {
    context: paths.context,
    entry: {
        index: ['./index.js']
    },
    output: {
        path: paths.output.path,
        filename: '[name].min.js',
        // 将项目作为库
        library: 'lxJsLib',
        libraryTarget: 'umd'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            //去掉注释
            comments: false,
            compress: {
                //忽略警告,要不然会有一大堆的黄色字体出现
                warnings: false
            }
        })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'stage-1', 'stage-2', 'stage-3']
                }
            }]
        }]
    }
};

module.exports = config;
