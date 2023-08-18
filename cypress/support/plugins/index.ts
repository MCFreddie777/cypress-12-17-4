/// <reference types="cypress" />
const webpackPreprocessor = require('@cypress/webpack-batteries-included-preprocessor');

// @ts-ignore-next-line no-unused-vars
module.exports = (on: Cypress.PluginEvents, config:Cypress.PluginConfigOptions) => {
    on('file:preprocessor', webpackPreprocessor({
        typescript: require.resolve('typescript')
    }));
};
