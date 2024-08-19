<template>
  <div
    :class="$style.root"
    class="fixed top-0 left-0 w-full h-full z-50 bg-[#0000001a] cursor-pointer"
  >
    <div
      :class="$style.inner"
      class="flex flex-col gap-2.5 p-4 m-2 bg-white rounded-xl cursor-default w-full overflow-auto"
    >
      <IconClose class="absolute top-6 right-5 cursor-pointer" />
      <div class="text-xl font-semibold leading-none pe-4">{{ title }}</div>
      <div class="flex text-gray-500">
        {{ formatDate(date) }} • {{ time / 60 }} мин • {{ formatComment(comments.length) }}
      </div>
      <img
        :src="src"
        :alt="title"
        :class="$style.img"
        class="rounded-2xl object-cover w-full h-full"
      />
      <div>{{ text }}</div>
      <div class="flex gap-2.5">
        <div
          v-for="{ name, placeholder } in tags"
          :key="name"
          class="px-3.5 py-1.5 flex items-center rounded-3xl relative bg-blue-100 text-blue-500 text-sm leading-none"
        >
          {{ placeholder }}
        </div>
      </div>
      <div>{{ formatComment(comments.length) }}</div>
      <CommentField name="commentField" placeholder="Введите комментарий" />
      <CardComment v-for="comment in comments" :="comment" :key="comment.id" class="mt-2" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type PropType } from 'vue';
import type { CardComment as CardCommentInterface, Tag } from '@/utils/blogInterface';
import { formatComment, formatDate } from '@/utils';
import IconClose from '@/components/icons/IconClose.vue';
import CardComment from '@/components/CardComment.vue';
import CommentField from '@/components/ui/CommentField.vue';

const props = defineProps({
  src: { type: String },
  date: { type: Number, default: 0 },
  time: { type: Number, default: 0 },
  comments: {
    type: Array as PropType<CardCommentInterface[]>,
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
.inner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 630px;
  max-height: calc(100% - 40px);
}

.img {
  max-width: 600px;
  max-height: 380px;
}
</style>
