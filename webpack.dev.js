'use strict';

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
        filename: '[name].js'
    },
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
