<template>
  <div>
    <img :src="src" />
    <div>{{ date }} {{ time }} {{ commentCount }}</div>
    <div>{{ title }}</div>
    <div>{{ description }}</div>
    <div class="flex" v-for="{ name, placeholder } in tags" :key="name">{{ placeholder }}</div>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';
import type { CardComment, Tag } from '@/utils/blogInterface';

const props = defineProps({
  src: { type: String },
  date: { type: Number },
  time: { type: Number },
  commentCount: { type: Number },
  comments: { type: Array as PropType<CardComment[]> },
  title: { type: String },
  description: { type: String },
  text: { type: String },
  tags: { type: Array as PropType<Tag[]> }
});
</script>
