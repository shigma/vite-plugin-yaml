import { defineConfig } from 'vite';
import ViteYAML from '@modyfi/vite-plugin-yaml';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    ViteYAML(),
  ]
})
