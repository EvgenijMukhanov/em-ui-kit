import { resolve as _resolve } from 'path';


export const mode = 'production';
export const entry = './src/index.ts';
export const output = {
    filename: "index.js",
    path: _resolve(__dirname, 'dist'),
    libraryTarget: "umd",
    clean: true
};
export const resolve = {
    extensions: ['.ts', '.tsx']
};
export const externals = {
    react: 'react'
};
export const module = {
    rules: [
        {
            test: /\.css/,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(ts|tsx)?$/,
            use: ['ts-loader'],
            exclude: /node_modules/
        }
    ],
};