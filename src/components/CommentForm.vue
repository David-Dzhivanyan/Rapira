<template>
  <form @submit.prevent="onSubmit" @reset.prevent="clear">
    <CommentField
      name="commentField"
      placeholder="Введите комментарий"
      :maxLetter="maxLetter"
      :isValid="commentValid"
      v-model="commentInput"
      @clear="clear"
    />
    <div class="text-gray-500 text-xs mt-1.5">
      <span :class="!commentValid && 'text-red-300'">{{ letterCount }}</span> из
      {{ maxLetter }} символов
    </div>
    <div class="flex justify-end">
      <Btn class="me-2.5" type="reset">Отмена</Btn>
      <Btn primary :disabled="!commentValid">Опубликовать</Btn>
    </div>
  </form>
</template>
<script setup lang="ts">
import Btn from '@/components/ui/Btn.vue';
import CommentField from '@/components/ui/CommentField.vue';
import { computed, ref } from 'vue';

const props = defineProps({
  modelValue: { type: String, default: '' }
});

const emit = defineEmits(['update:modelValue']);

const inputData = computed({
  get: (): string => props.modelValue,
  set: (value: string) => emit('update:modelValue', value)
});

const commentInput = ref('');
const maxLetter = 250;
const letterCount = computed(() => {
  return commentInput.value.length;
});

const commentValid = computed(() => {
  return letterCount.value <= maxLetter;
});

const clear = () => {
  commentInput.value = '';
};

const onSubmit = () => {
  inputData.value = commentInput.value;
  clear();
};
</script>
