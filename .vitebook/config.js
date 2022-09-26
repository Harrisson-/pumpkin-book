import { clientPlugin, defineConfig } from '@vitebook/client/node';
import { vuePlugin } from '@vitebook/vue/node';
import { defaultThemePlugin } from '@vitebook/theme-default/node';

export default defineConfig({
  include: ['src/**/*.story.vue'],
  plugins: [
    vuePlugin({ appFile: 'App.vue' }),
    clientPlugin(),
    defaultThemePlugin(),
  ],
  site: {
    title: 'pumpkin-book',
    description: 'book for pumpkinJs components',
    /** @type {(import('@vitebook/theme-default/node').DefaultThemeConfig} */
    theme: {},
  },
});
