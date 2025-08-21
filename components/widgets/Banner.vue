<script setup lang="ts"></script>

<template>
  <header class="h-[800px] bg-fixed custom-wallpaper">
    <div class="wrapper h-full py-8 flex flex-col">
      <Logo class="text-white" />
      <h1 class="flex-1 flex items-center justify-center text-5xl font-semibold text-white">
        {{ $t('banner.title') }}
      </h1>
    </div>
  </header>
</template>

<style scoped lang="scss">
.custom-wallpaper {
  background-image: url('/img/banner.jpg');
}
</style>
