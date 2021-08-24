module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  plugins: ["prettier"],
  extends: ["eslint:recommended", "airbnb-base", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "script",
    ecmaFeatures: {
      jsx: false,
    },
  },
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "no-console": "off",
  },
};
