import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default ({ mode }) => {
  process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ''));

  return defineConfig({
    plugins: [react(), tsconfigPaths()],
    resolve: {
      alias: [{ find: '@', replacement: './src' }],
    },
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true,
          additionalData: `@import "src/sass/index.scss";`,
        },
      },
    },
  });
};
