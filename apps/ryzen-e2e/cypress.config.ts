import { defineConfig } from 'cypress';
import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

export const cypressJsonConfig = {
  fileServerFolder: '.',
  fixturesFolder: './src/fixtures',
  video: true,
  videosFolder: '../../dist/cypress/apps/ryzen-e2e/videos',
  screenshotsFolder: '../../dist/cypress/apps/ryzen-e2e/screenshots',
  chromeWebSecurity: false,
  defaultCommandTimeout: 60000,
  requestTimeout: 60000,
  retries: {
    runMode: 1,
    openMode: 0,
  },
  supportFile: 'src/support/e2e.ts',
};
export default defineConfig({
  e2e: {
    ...nxE2EPreset(__dirname),
    ...cypressJsonConfig,
    setupNodeEvents(on) {
      on('task', {
        log(message) {
          console.log(message);
          return null;
        },
      });
    },
  },
});
