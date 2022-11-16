import { defineConfig, defaultColors } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'

export default defineConfig({
  plugins: [
    HstVue(),
  ],
  tree: {
    file: 'title',
    order: 'asc',
  },
  theme: {
    title: 'Pumpkin Vue',
    favicon: '/pumpkin.png',
    logo: {
      square: '/src/img/pumpkin.png',
      light: '/src/img/pumpkin.png',
      dark: '/src/img/pumpkin.png',
    },
    colors: {
      primary: defaultColors.orange,
      gray: defaultColors.green,
    },
    logoHref: '#',
  },
  autoApplyContrastColor: true,
})