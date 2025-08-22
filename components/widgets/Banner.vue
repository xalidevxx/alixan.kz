<script setup lang="ts"></script>

<template>
  <header class="h-[800px] bg-top bg-no-repeat custom-wallpaper">
    <div class="wrapper h-full py-8 flex flex-col">
      <div class="w-full flex items-center justify-between">
        <Logo class="text-white" />
        <Lang />
      </div>
      <h1
        class="flex-1 px-4 flex items-center justify-center font-bold text-white text-center lg:text-5xl lg:leading-16 text-3xl leading-13"
      >
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
