/// <reference types="cypress" />
import * as path from 'path';

const webpackPreprocessor = require('@cypress/webpack-preprocessor');
const webpackOptions = {
	resolve: {
		extensions: ['.ts', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'ts-loader',
						options: {
							configFile: path.resolve(__dirname, '../../tsconfig.json'),
						},
					},
				],
			},
		],
	},
};

// @ts-ignore-next-line no-unused-vars
module.exports = (on: Cypress.PluginEvents, config:Cypress.PluginConfigOptions) => {
	on('file:preprocessor', webpackPreprocessor({webpackOptions}));
};
