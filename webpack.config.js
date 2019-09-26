/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const html = require('html-webpack-plugin');

const htmlPlugin = new html({
	template: path.resolve(__dirname) + '/src/index.html',
	filename: 'index.html',
});
module.exports = {
	entry: ['./src/index.tsx'],
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js'],
	},
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname) + '/dist',
	},
	mode: 'none',
	plugins: [htmlPlugin],
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9000,
		host: '0.0.0.0',
		disableHostCheck: true,
	},
};
