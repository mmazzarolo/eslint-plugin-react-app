'use strict';
const reactAppConfig = require('eslint-config-react-app');

const rules = {};

Object.keys(reactAppConfig.rules).forEach((ruleName) => {
  rules[`react-app/${ruleName}`] = reactAppConfig.rules[ruleName];
});

module.exports = {
  parser: require.resolve('babel-eslint'),
  plugins: ['react-app'],
  rules,
};
