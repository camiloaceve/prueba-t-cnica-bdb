module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  plugins: ["prettier"],
  extends: ["standard", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  rules: {
    "comma-dangle": [2, "never"],
    "no-cond-assign": 2,
    "no-console": 1,
    "no-constant-condition": 2,
    "no-control-regex": 2,
    "no-debugger": 2,
    "no-dupe-args": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-empty-character-class": 2,
    "no-empty": 2,
    "no-ex-assign": 2,
    "no-extra-boolean-cast": 2,
    "no-extra-semi": 2,
    "no-func-assign": 2,
    "no-inner-declarations": 2,
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 1,
    "no-negated-in-lhs": 1, // Check https://eslint.org/docs/2.0.0/rules/no-negated-in-lhs
    "no-obj-calls": 1,
    "no-regex-spaces": 1,
    "no-sparse-arrays": 1,
    "no-unexpected-multiline": 2,
    "no-unreachable": 2,
    "use-isnan": 2,
    "valid-jsdoc": 1,
    "valid-typeof": 2,
    "require-jsdoc": 1,
    "prettier/prettier": 2
  }
}
