'use strict';
const config = require('./config');
const plugins = require('./plugins');

const rules = {};

// Requires and sets the rules of the eslint-plugins used by create-react-app.
plugins.forEach(pluginName => {
  const plugin = require(`eslint-plugin-${pluginName}`);
  Object.keys(plugin.rules).forEach(ruleName => {
    rules[`${pluginName}/${ruleName}`] = plugin.rules[ruleName];
  });
});

module.exports = {
  configs: {
    recommended: config,
  },
  rules,
};
