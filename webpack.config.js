const path = require('path');


module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: "umd",
        clean: true
    },
    resolve: {
        extensions: ['.ts', '.tsx']
    },
    externals: {
        react: 'react'
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                use: ['ts-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader'],
            }
            // {
            //     test: /\.module\.css$/,
            //     use: [
            //         {
            //             loader: "style-loader"
            //         },
            //         {
            //             loader: "css-loader",
            //             options: {
            //                 modules: {
            //                     localIndentName: '[local]__[sha1:hash:hex:7]'
            //                 }
            //             }
            //         }
            //     ],
            // },
            // {
            //     test: /^((?!\.module).)*css$/,
            //     use: [
            //         {
            //             loader: "style-loader"
            //         },
            //         {
            //             loader: "css-loader"
            //         }
            //     ],
            // }
        ],
    }
}