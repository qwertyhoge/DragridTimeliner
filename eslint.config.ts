import { defineConfig } from "eslint";

export default defineConfig({
  root: true,
  files: ["src/**/*.ts", "src/**/*.tsx", "src/**/*.js", "src/**/*.jsx"],
  extends: ["react-app"],
  rules: {
    "react/react-in-jsx-scope": "off",
    semi: "error",
    "prefer-const": "error",
    "@stylistic/eol-last": "error",
    "@stylistic/no-multi-spaces": "error",
    "@stylistic/no-trailing-spaces": "error",
  },
});