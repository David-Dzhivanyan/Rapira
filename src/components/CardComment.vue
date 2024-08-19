<template>
  <div class="flex items-start">
    <img :src="src" alt="avatar" class="rounded-full me-3 h-10 w-10" />
    <div class="flex flex-col gap-1.5">
      <div class="font-semibold leading-none">{{ name }}</div>
      <div class="leading-none">{{ text }}</div>
      <div class="leading-none">{{ formatDate(date) }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  src: { type: String },
  name: { type: String },
  text: { type: String },
  date: { type: Number, default: 0 }
});

function formatDate(date: number): string {
  return new Date(date * 1000).toLocaleDateString();
}
</script>
