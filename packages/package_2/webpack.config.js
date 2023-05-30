const path = require('path');

const config = {
    entry: ['./src'],
    output: {
        path: path.resolve(__dirname, 'build'),
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, './')
        },
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },
    resolve: {
        cacheWithContext: false,
        extensions: ['.js', '.jsx', '.json', '.tsx', '.ts'],
    },
};

module.exports = config;