/** Google + Angular + TS + Prettier + Vitest (saubere Parser-Trennung) */
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

  // Basis (nur Core + Google + Prettier global)
  extends: ["eslint:recommended", "google", "plugin:prettier/recommended"],

  rules: {
    "prettier/prettier": "error",
    "require-jsdoc": "off",
    "valid-jsdoc": "off",
    "new-cap": "off",
  },

  overrides: [
    // --- TypeScript-Dateien ---
    {
      files: ["**/*.ts"],
      parser: "@typescript-eslint/parser",
      parserOptions: { ecmaVersion: "latest", sourceType: "module" },
      env: { browser: true, node: true, es2023: true },
      plugins: ["@typescript-eslint", "@angular-eslint"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@angular-eslint/recommended",
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

    // --- Angular-Templates (HTML) ---
    {
      files: ["**/*.html"],
      parser: "@angular-eslint/template-parser",
      extends: ["plugin:@angular-eslint/template/recommended"],
      rules: {
        // hier ggf. Template-spezifische Regeln feintunen
      },
    },

    // --- Vitest-Specs ---
    {
      files: ["**/*.spec.ts", "**/*.test.ts"],
      // kein env 'vitest-globals' (ESLint 8.57.1 kennt das nicht)
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
