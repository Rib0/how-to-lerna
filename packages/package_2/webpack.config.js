const path = require('path');

const config = {
    entry: ['./src'],
    output: {
        path: path.resolve(__dirname, 'build'),
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, './')
        }
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
        symlinks: false,
        cacheWithContext: false,
        extensions: ['.js', '.jsx', '.json', '.tsx', '.ts'],
        modules: [
            'node_modules',
            path.resolve(__dirname, 'src/javascript'),
            path.resolve(__dirname, 'src'),
        ],
    },
};

module.exports = config;