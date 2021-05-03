import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import website from './src/config/website'
const { resolve } = require('path')

const htmlPlugin = () => {
  return {
    name: 'html-transform',
    transformIndexHtml(html) {
      return html.replace(
        /<title>(.*?)<\/title>/,
        `<title>${website.title}</title>`
      )
    }
  }
}

const elementPlusOption = {
  libraryName: 'element-plus',
  esModule: true,
  ensureStyleFile: true,
  resolveStyle: (name) => {
    name = name.slice(3)
    return `element-plus/packages/theme-chalk/src/${name}.scss`;
  },
  resolveComponent: (name) => {
    return `element-plus/lib/${name}`;
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    styleImport({ libs: [elementPlusOption] }),
    htmlPlugin()
  ],
  resolve: {
    alias: [{
      find: '@',
      replacement: resolve(__dirname, './src')
    }]
  }
})
