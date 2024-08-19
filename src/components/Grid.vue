<template>
  <div class="p-3">
    <div class="container mx-auto bg-white rounded-xl p-3 md:p-4 lg:p-7">
      <div
        class="grid grid-cols-1 items-start gap-y-5 md:gap-y-6 md:gap-x-5 lg:gap-y-10 md:grid-cols-2 lg:grid-cols-3"
      >
        <Card v-for="item in items" :key="item.id" :="item" class="mx-auto md:mx-0" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Card from '@/components/Card.vue';
import type { PropType } from 'vue';

const props = defineProps({
  items: { type: Array as PropType<Items[]> }
});

interface Items {
  id: number;
}
</script>
