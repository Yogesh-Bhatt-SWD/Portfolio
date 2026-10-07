import { defineConfig } from 'vite';
import fs from 'fs';

export default defineConfig({
  plugins: [
    {
      name: 'copy-static-assets',
      closeBundle() {
        if (fs.existsSync('assets')) {
          fs.cpSync('assets', 'dist/assets', { recursive: true });
        }
      }
    }
  ]
});
