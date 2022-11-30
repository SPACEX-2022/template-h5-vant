import type { UserConfig, ConfigEnv } from 'vite';
import { loadEnv } from 'vite';
// import Components from 'unplugin-vue-components/vite';
// import { VantResolver } from 'unplugin-vue-components/resolvers';
import { fileURLToPath, URL } from 'node:url'
import { viteVConsole } from 'vite-plugin-vconsole';
import { wrapperEnv } from './build/utils';
import { createProxy } from './build/vite/proxy';
import * as path from 'path'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { babel } from '@rollup/plugin-babel';
import {createVitePlugins} from "./build/vite/plugin";

export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();

  const env = loadEnv(mode, root);

  // The boolean type read by loadEnv is a string. This function can be converted to boolean type
  const viteEnv = wrapperEnv(env);

  const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY, VITE_DROP_CONSOLE } = viteEnv;

  const isBuild = command === 'build';

  return {
    base: VITE_PUBLIC_PATH,
    root,
    assetsInclude: [
      '**/*.svga'
    ],
    plugins: [
      babel({
        plugins: [
          [
            '@babel/plugin-transform-react-jsx',
            {
              runtime: 'automatic',
              importSource: '@antv/f2',
            },
          ],
        ],
      }),
      vue(),
      vueJsx(),
      // Components({
      //   resolvers: [VantResolver()],
      // }),
      viteVConsole({
        entry: path.resolve('src/main.ts'), // or you can use entry: [path.resolve('src/main.ts')]
        localEnabled: true,
        enabled: viteEnv.VITE_USE_VCONSOLE === true,
        config: {
          maxLogNumber: 1000,
          theme: 'dark'
        }
      }),
      ...createVitePlugins(viteEnv, isBuild)
    ],
    server: {
      proxy: createProxy(VITE_PROXY),
    },
    resolve: {
      extensions: ['.vue', '.js', '.ts', '.json', '.mjs'],
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '/@/': fileURLToPath(new URL('./src', import.meta.url)) + '/',
        '/#/': fileURLToPath(new URL('./types', import.meta.url)) + '/',
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/utils.scss";'
        }
      }
    }
  }
}
// https://vitejs.dev/config/
// export default defineConfig()
