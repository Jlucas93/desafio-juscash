import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const env = loadEnv('all', process.cwd());

const port = Number(env.VITE_PORT) || 3000;

export default defineConfig({
  build: {
    outDir: 'build',
    chunkSizeWarningLimit: 4000,
  },
  server: {
    port,
    host: 'localhost',
  },
  plugins: [react(), tsconfigPaths()],
});
