<script setup lang="ts">
defineProps<{ href: string; label: string }>();
</script>

<template>
  <Button
    as-child
    variant="link"
    class="text-muted-foreground hover:text-foreground text-base font-medium p-0"
  >
    <a :href="href" target="_blank">{{ label }}</a>
  </Button>
</template>

<style scoped lang="scss"></style>
