<script setup lang="ts">
const { t, tm } = useI18n();

type FaqItem = {
  title: string;
  content: string;
};
</script>

<template>
  <section>
    <p class="page-title">{{ t('faq.title') }}</p>
    <Accordion type="single" class="w-full" collapsible>
      <AccordionItem
        v-for="(item, i) in tm('faq.items') as Record<string, FaqItem>"
        :key="i"
        :value="i.toString()"
      >
        <AccordionTrigger>{{ $rt(item.title) }}</AccordionTrigger>
        <AccordionContent>{{ $rt(item.content) }}</AccordionContent>
      </AccordionItem>
    </Accordion>
  </section>
</template>

<style scoped lang="scss"></style>
