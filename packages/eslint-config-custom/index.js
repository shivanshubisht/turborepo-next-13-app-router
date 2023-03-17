// module.exports = {
//   $schema: "https://json.schemastore.org/eslintrc",
//   root: true,
//   extends: [
//     "next/core-web-vitals",
//     "turbo",
//     "prettier",
//     "plugin:tailwindcss/recommended",
//   ],
//   plugins: ["tailwindcss"],
//   rules: {
//     "@next/next/no-html-link-for-pages": "off",
//     "react/jsx-key": "off",
//     "tailwindcss/no-custom-classname": "off",
//     "tailwindcss/classnames-order": "error",
//   },
//   settings: {
//     tailwindcss: {
//       callees: ["cn"],
//     },
//     next: {
//       rootDir: ["apps/*/"],
//     },
//   },
// }
module.exports = {
  $schema: "https://json.schemastore.org/eslintrc",
  root: true,
  extends: [
    "next/core-web-vitals",
    "turbo",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
    "plugin:tailwindcss/recommended",
  ],
  plugins: ["tailwindcss"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
    "tailwindcss/no-custom-classname": "off",
    "tailwindcss/classnames-order": "error",
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports", fixStyle: "inline-type-imports" },
    ],
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  settings: {
    tailwindcss: {
      callees: ["cn"],
    },
    next: {
      rootDir: ["apps/*/"],
    },
  },
}
