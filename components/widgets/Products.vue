<script setup lang="ts"></script>

<template>
  <section>
    <h1 class="page-title">
      {{ $t('products.title') }}
    </h1>

    <div class="flex flex-wrap gap-4">
      <a href="https://m.takta.kz/" target="_blank">
        <img
          src="https://api.takta.kz/files/logo.png"
          loading="lazy"
          alt="Takta.kz"
          width="180"
          height="180"
          class="w-[180px] h-[180px] object-cover rounded-3xl"
        />
        <p class="section-title mt-3 mb-2">Takta.kz</p>
        <p class="section-text">{{ $t('products.takta') }}</p>
      </a>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
