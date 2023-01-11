// module.exports = {
//   // ...
//   extends: [
//     // ...
//     "plugin:astro/recommended",
//   ],
//   // ...
//   overrides: [
//     {
//       // Define the configuration for `.astro` file.
//       files: ["*.astro"],
//       // Allows Astro components to be parsed.
//       parser: "astro-eslint-parser",
//       // Parse the script in `.astro` as TypeScript by adding the following configuration.
//       // It's the setting you need when using TypeScript.
//       parserOptions: {
//         parser: "@typescript-eslint/parser",
//         extraFileExtensions: [".astro"],
//       },
//       ignorePatterns: ["*.mjs"],

//       rules: {
//         // override/add rules settings here, such as:
//         // "astro/no-set-html-directive": "error"
//       },
//     },
//     // ...
//   ],
// };


module.exports = {
  parser: '@typescript-eslint/parser', // add the TypeScript parser
  plugins: [
    'svelte3',
    '@typescript-eslint' // add the TypeScript plugin
  ],
  overrides: [ // this stays the same
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  rules: {
    // ...
  },
  settings: {
    'svelte3/typescript': () => require('typescript'), // pass the TypeScript package to the Svelte plugin
    // OR
    // 'svelte3/typescript': true, // load TypeScript as peer dependency
    // ...
  }
};
