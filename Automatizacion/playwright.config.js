const { defineConfig } = require('@playwright/test');
const path = require('path');

function getTimestampFolder() {
  const now = new Date();
  return [
    now.getFullYear(),
    (now.getMonth() + 1).toString().padStart(2, '0'),
    now.getDate().toString().padStart(2, '0'),
    now.getHours().toString().padStart(2, '0'),
    now.getMinutes().toString().padStart(2, '0'),
    now.getSeconds().toString().padStart(2, '0'),
  ].join('-');
}

module.exports = defineConfig({
  outputDir: path.join('test-results', getTimestampFolder()),
  use: {
    video: 'on',  // Cambia de 'retain-on-failure' a 'on'
  },
  reporter: [
    ['html', {
      outputFolder: path.join('html-report', getTimestampFolder())
    }],
    ['list']
  ],
});
