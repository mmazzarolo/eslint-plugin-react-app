"use strict";
const plugins = require("./plugins");
const reactAppConfig = require("eslint-config-react-app");

const rules = {};

// Is the rule part of an eslint plugin?
const isPluginRule = ruleName => {
  for (const plugin of plugins) {
    if (ruleName.indexOf(`${plugin.rulePrefix}/`) !== -1) {
      return true;
    }
  }
  return false;
};

// Renames the plugins rules prefixing them with 'react-app'
Object.keys(reactAppConfig.rules).forEach(ruleName => {
  if (isPluginRule(ruleName)) {
    rules[`react-app/${ruleName}`] = reactAppConfig.rules[ruleName];
  } else {
    rules[ruleName] = reactAppConfig.rules[ruleName];
  }
});

module.exports = {
  parser: reactAppConfig.parser,
  plugins: ["react-app"],
  rules,
  settings: reactAppConfig.settings,
  env: reactAppConfig.env,
  root: reactAppConfig.root,
  parserOptions: reactAppConfig.parserOptions,
  overrides: reactAppConfig.overrides
};
