import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2025-07-15',
  app: {
    rootId: 'alixan',
  },
  devServer: {
    port: 4545,
  },
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  modules: ['@nuxt/eslint', 'shadcn-nuxt', '@nuxt/fonts', '@nuxtjs/i18n'],
  css: ['~/assets/styles/tailwind.css'],
  features: {
    inlineStyles: true,
  },
  fonts: {
    defaults: {
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['cyrillic-ext', 'cyrillic', 'latin-ext', 'latin'],
    },
    families: [{ name: 'Geist', provider: 'google' }],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },
  components: [
    { path: '~/components/ui', prefix: '' },
    { path: '~/components/widgets', prefix: '' },
  ],
  i18n: {
    defaultLocale: 'ru',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
    locales: [
      { code: 'kz', name: 'Қазақша', file: 'kz.json' },
      { code: 'ru', name: 'Русский', file: 'ru.json' },
      { code: 'en', name: 'English', file: 'en.json' },
    ],
  },
});