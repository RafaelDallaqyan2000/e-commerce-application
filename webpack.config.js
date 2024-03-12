const HtmlWebpackPlugin = require('html-webpack-plugin');

const PLUGINS = [
    new HtmlWebpackPlugin({
        template: './public/index.html'
    })
]

const RULES = [
    {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
    },
    {
        test: /\.css$/i,
        use: [
            {
                loader: 'style-loader',
                options: {
                    esModule: true
                }
            },
            'css-loader'
        ]
    }
]


module.exports = {
    entry: './index.tsx',
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css']
    },
    module: {
        rules: RULES
    },
    plugins: PLUGINS,
    devServer: {
        port: 3002
    }
}
