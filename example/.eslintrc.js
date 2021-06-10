module.exports = {
  root: true,
  extends: "@react-native-community",
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "react-native/no-inline-styles": 0,
    "@typescript-eslint/no-unused-vars": "off",
    quotes: [1, "double", "avoid-escape"], // specify whether double or single quotes should be used
  },
};
