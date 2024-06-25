module.exports = {
  root: true,
  env: { browser: true, node: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { 
    ecmaVersion: 'latest', sourceType: 'module',
    "import/resolver": {
      alias: {
        map: [
          ["src", "./src"]
        ],
        extensions: [
          ".js",
          ".jsx",
          ".json"
        ]
      }
    }
  },
  settings: { 
    react: { version: 'detect' }
  },
  plugins: [
    "react",
    "react-hooks",
    "react-refresh",
  ],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "react/prop-types": "off",
  },
}
