<script setup lang="ts">
const { locale } = useI18n();

useHead({
  htmlAttrs: {
    lang: locale.value,
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/icons/apple-touch-icon.png',
    },
  ],
});

usePageMeta({});
</script>

<template>
  <div class="min-h-screen">
    <Banner />
    <main class="wrapper md:py-16 max-md:py-10 flex flex-col md:gap-16 max-md:gap-10">
      <Products />
      <Bio />
      <Faq />
    </main>
    <Footer />
  </div>
</template>
