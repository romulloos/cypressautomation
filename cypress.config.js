const { defineConfig } = require('cypress');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;


module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.advantageonlineshopping.com",
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin.default(config)],
        })
      );
      return config;
    },
    specPattern: 'cypress/e2e/**/*.feature',
    env: {
      stepDefinitions: 'cypress/e2e/step_definitions/**/*.{js,ts}',
    },
  },
  video: false,
});


