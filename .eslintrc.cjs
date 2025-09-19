module.exports = {
  root: true,

  ignorePatterns: [
    "dist/",
    "out-tsc/",
    "coverage/",
    "node_modules/",
    ".angular/",
    "*.min.js",
  ],
  rules: {
    "prettier/prettier": "error",
    "require-jsdoc": "off",
    "valid-jsdoc": "off",
    "new-cap": "off",
  },

  overrides: [
    // TypeScript
    {
      files: ["**/*.ts"],
      parser: "@typescript-eslint/parser",
      parserOptions: { ecmaVersion: "latest", sourceType: "module" },
      env: { browser: true, node: true, es2023: true },
      plugins: ["@typescript-eslint", "@angular-eslint"],
      extends: [
        "eslint:recommended",
        "google",
        "plugin:@typescript-eslint/recommended",
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates",
        "plugin:prettier/recommended",
      ],
      rules: {
        "max-len": [
          "warn",
          {
            code: 100,
            ignoreComments: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
          },
        ],
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": [
          "warn",
          { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
        ],
      },
    },

    // Angular-Templates (HTML)
    {
      files: ["**/*.html"],
      parser: "@angular-eslint/template-parser",
      extends: [
        "plugin:@angular-eslint/template/recommended",
        "plugin:@angular-eslint/template/accessibility",
      ],
      rules: {},
    },

    // Vitest-Specs
    {
      files: ["**/*.spec.ts", "**/*.test.ts"],
      plugins: ["vitest"],
      globals: {
        describe: "readonly",
        it: "readonly",
        test: "readonly",
        expect: "readonly",
        vi: "readonly",
        beforeAll: "readonly",
        beforeEach: "readonly",
        afterAll: "readonly",
        afterEach: "readonly",
      },
      rules: {
        "vitest/no-focused-tests": "error",
        "vitest/no-disabled-tests": "warn",
      },
    },
  ],
};
