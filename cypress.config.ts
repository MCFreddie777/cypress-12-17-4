import { defineConfig } from 'cypress';

export default defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			return require('./cypress/support/plugins/index.ts')(on, config);
		},
	},
});
