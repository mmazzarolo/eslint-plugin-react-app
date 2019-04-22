"use strict";
const config = require("./config");
const plugins = require("./plugins");

const rules = {};

// Requires and sets the rules of the eslint-plugins used by create-react-app.
plugins.forEach(plugin => {
  const pluginModule = require(plugin.name);
  Object.keys(pluginModule.rules).forEach(ruleName => {
    rules[`${plugin.rulePrefix}/${ruleName}`] = pluginModule.rules[ruleName];
  });
});

module.exports = {
  configs: {
    recommended: config
  },
  rules
};
