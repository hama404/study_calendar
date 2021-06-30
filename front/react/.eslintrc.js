module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    "react-app",
    "react-app/jest",
    "eslint:recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: "module",
  },
  plugins: [
    "react"
  ],
  root: true,
  rules: {
    "react/jsx-uses-vars": 1
  }
}
