<template>
  <div
    :class="[$style.root, isShow && $style.show]"
    class="fixed top-0 left-0 w-full h-full z-50 bg-[#0000001a] cursor-pointer"
    @click="close"
  >
    <div
      :class="$style.inner"
      class="flex flex-col gap-2.5 p-4 md:m-4 bg-white rounded-xl cursor-default w-full overflow-auto"
      @click.stop
    >
      <IconClose class="absolute top-6 right-5 cursor-pointer text-gray-300" @click="close" />
      <div class="text-lg md:text-xl font-semibold leading-none pe-4">{{ title }}</div>
      <div class="flex gap-2 text-gray-500 text-xs md:text-sm">
        {{ formatDate(date) }} • <IconTime />{{ time / 60 }} мин • <IconComment />
        {{ formatComment(comments.length) }}
      </div>
      <img
        :src="src"
        :alt="title"
        :class="$style.img"
        class="rounded-2xl object-cover w-full h-full"
      />
      <div class="text-sm md:text-base">{{ text }}</div>
      <div class="flex gap-2.5">
        <div
          v-for="{ name, placeholder } in tags"
          :key="name"
          class="px-3.5 py-1.5 flex items-center rounded-3xl relative bg-blue-100 text-blue-500 text-sm leading-none"
        >
          {{ placeholder }}
        </div>
      </div>
      <div class="font-bold">{{ formatComment(comments.length) }}</div>
      <CommentForm v-model="commentText" />
      <CardComment v-for="comment in comments" :="comment" :key="comment.id" class="mt-2" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type PropType, ref } from 'vue';
import type { CardComment as CardCommentInterface, Tag } from '@/utils/blogInterface';
import { formatComment, formatDate } from '@/utils';
import IconClose from '@/components/icons/IconClose.vue';
import CardComment from '@/components/CardComment.vue';
import CommentForm from '@/components/CommentForm.vue';
import IconTime from '@/components/icons/IconTime.vue';
import IconComment from '@/components/icons/IconComment.vue';

defineProps({
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
  tags: { type: Array as PropType<Tag[]> },
  isShow: { type: Boolean }
});

const emit = defineEmits(['close']);

const commentText = ref('');

const close = () => {
  emit('close');
};
</script>

<style lang="scss" module>
.root {
  overflow: auto;
  max-height: 100vh;
  opacity: 0;
  transition: 0.4s ease-in-out all;
  pointer-events: none;
  transition-property: opacity;
}

.show {
  opacity: 1;
  transform: translateY(0);
  pointer-events: initial;

  .inner {
    transform: translate(-50%, 0);
  }
}

.inner {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -200%);
  transition: 0.3s ease-in-out transform;
  max-width: 630px;
}

.img {
  max-width: 600px;
  max-height: 380px;
}
</style>
