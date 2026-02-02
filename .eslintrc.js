module.exports = {
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    "react/no-deprecated": 0,
  },
  ignorePatterns: ["build/", "node_modules/"],
};
