<script setup lang="ts">
import { Check, Globe } from 'lucide-vue-next';

import type { ILang } from '~/interfaces/lang.interface';

const { locale, setLocale } = useI18n();

const data: ILang[] = [
  { code: 'kz', title: 'Қазақша' },
  { code: 'ru', title: 'Русский' },
  { code: 'en', title: 'English' },
];

const selectedLang = ref<ILang>(data.find((l) => l.code === locale.value) || data[0]!);
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button>
        <Globe class="w-4 h-4 mr-2" />
        {{ selectedLang.title }}
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-56">
      <DropdownMenuGroup>
        <DropdownMenuItem
          v-for="lang in data"
          :key="lang.code"
          @click="
            setLocale(lang.code);
            selectedLang = lang;
          "
        >
          <span>{{ lang.title }}</span>
          <Check v-if="selectedLang.code === lang.code" class="ml-auto w-4 h-4" />
        </DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
