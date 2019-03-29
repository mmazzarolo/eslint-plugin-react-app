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
  parser: require.resolve("babel-eslint"),
  plugins: ["react-app"],
  rules,
  settings: reactAppConfig.settings,
  env: reactAppConfig.env,
  root: reactAppConfig.root,
  parserOptions: reactAppConfig.parserOptions,
  // While waiting for the "Add TypeScript linting support" PR to be released
  // in eslint-config-react-app we'll manually specify its changes here.
  // See https://github.com/facebook/create-react-app/pull/6513/files
  overrides: {
    files: ["**/*.ts", "**/*.tsx"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true
      },
      warnOnUnsupportedTypeScriptVersion: true
    },
    plugins: ["@typescript-eslint"],
    rules: {
      // These ESLint rules are known to cause issues with typescript-eslint
      // See https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended.json
      camelcase: "off",
      indent: "off",
      "no-array-constructor": "off",
      "no-unused-vars": "off",

      "@typescript-eslint/no-angle-bracket-type-assertion": "warn",
      "@typescript-eslint/no-array-constructor": "warn",
      "@typescript-eslint/no-namespace": "error",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          args: "none",
          ignoreRestSiblings: true
        }
      ]
    }
  }
};
