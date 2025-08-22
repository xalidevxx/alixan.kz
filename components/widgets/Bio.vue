<script setup lang="ts"></script>

<template>
  <section class="flex items-center justify-between max-md:flex-col-reverse md:gap-10 max-md:gap-6">
    <div class="max-w-[700px]">
      <p class="page-title">{{ $t('bio.title') }}</p>
      <p class="page-text">{{ $t('bio.text') }}</p>
    </div>
    <img src="/img/me.jpg" alt="Alikhan" loading="lazy" class="object-cover" />
  </section>
</template>

<style scoped lang="scss"></style>
