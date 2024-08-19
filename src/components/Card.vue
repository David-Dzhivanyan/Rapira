<template>
  <div :class="$style.root" class="flex flex-col gap-2.5 cursor-pointer group">
    <img
      :src="src"
      :alt="title"
      :class="$style.img"
      class="rounded-2xl object-cover w-full h-full"
    />
    <div class="flex text-gray-500">
      {{ formatDate(date) }} • {{ time / 60 }} мин • {{ formatComment(comments.length) }}
    </div>
    <div class="text-xl font-semibold leading-none group-hover:text-blue-500">{{ title }}</div>
    <div>{{ description }}</div>
    <div class="flex gap-2.5">
      <div
        v-for="{ name, placeholder } in tags"
        :key="name"
        class="px-3.5 py-1.5 flex items-center rounded-3xl relative bg-blue-100 text-blue-500 text-sm leading-none"
      >
        {{ placeholder }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type PropType } from 'vue';
import type { CardComment, Tag } from '@/utils/blogInterface';
import { formatComment, formatDate } from '@/utils';

const props = defineProps({
  src: { type: String },
  date: { type: Number, default: 0 },
  time: { type: Number, default: 0 },
  comments: {
    type: Array as PropType<CardComment[]>,
    default() {
      return [];
    }
  },
  title: { type: String },
  description: { type: String },
  text: { type: String },
  tags: { type: Array as PropType<Tag[]> }
});
</script>

<style lang="scss" module>
.root {
  max-width: 400px;
}

.img {
  max-width: 400px;
  max-height: 250px;
}
</style>
