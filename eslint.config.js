"use strict";

const eslintPluginBeian = require('./lib/index.js')

module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      ecmaVersion: "latest",
    },
    // Using the eslint-plugin-example plugin defined locally
    plugins: { "eslint-plugin-beian": eslintPluginBeian },
    rules: {
        "eslint-plugin-beian/enforce-beian-console": "error",
    },
  }
]
