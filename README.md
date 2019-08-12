[![npm version](https://badge.fury.io/js/eslint-plugin-react-app.svg)](https://badge.fury.io/js/eslint-plugin-react-app)

# eslint-plugin-react-app

A minimal set of easy to install ESLint rules for your project: just install a single NPM package add it to your `.eslintrc` and you'll be all set.  

> This plugin exposes [the ESLint configuration used by Create React App](https://github.com/facebook/create-react-app/tree/master/packages/eslint-config-react-app) without the need of declaring all its dependencies.  
Use it if you need a simple and tested ESLint configuration but you don't want to install a bunch of dependencies.  
It also works in React Native out of the box.

## Setup

1. Install it using npm: `npm install --development eslint eslint-plugin-react-app`.
2. Extend `plugin:react-app/recommended` in your `.eslintrc`.

Example `.eslintrc`:

```json
{
  "extends": ["plugin:react-app/recommended"]
}
```

## Configuring the rules (optional)

You can configure the rules like every other plugin.
Just keep in mind that if you want to change a rule of an included plugin (for example of `eslint-plugin-react`) you must prefix the rule with `react-app/` (for preventing namespace collisions).  
For example:

```json
{
  "extends": ["plugin:react-app/recommended"],
  "rules": {
    "react-app/react/react-in-jsx-scope": ["warn"]
  }
}
```

## Included plugins  

The currently included create-react-app plugins are the following:

- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
- [eslint-plugin-flowtype](https://github.com/gajus/eslint-plugin-flowtype)
- [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
- [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint)

## Acknowledgements

Thanks to [fson](https://github.com/fson) and its [Create React App pull request](https://github.com/facebookincubator/create-react-app/pull/993) for the initial idea of this plugin.  
Thanks to [gaeron](https://github.com/gaearon) and everyone who contributed to Create React App.

## Disclaimer

This project is not officially maintained (nor officially "supported") by the Create React App team.
