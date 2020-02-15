"use strict";
const config = require("./config");
const plugins = require("./plugins");

const rules = {};

// Requires and sets the rules of the eslint-plugins used by create-react-app.
plugins.forEach(plugin => {
  try {
    const pluginModule = require(plugin.name)
    Object.keys(pluginModule.rules).forEach(ruleName => {
      rules[`${plugin.rulePrefix}/${ruleName}`] = pluginModule.rules[ruleName]
    })
  } catch (err) {
    // If the user doesn't have typescript installed skip the @typescript-eslint
    // rules setup. The other JS rules will still work correctly.
    const isTypescriptMissing =
      err.message.indexOf(`Cannot find module 'typescript'`) > -1 &&
      plugin.rulePrefix === "@typescript-eslint"
    if (!isTypescriptMissing) {
      throw err
    }
  }
})

module.exports = {
  configs: {
    recommended: config
  },
  rules
};
