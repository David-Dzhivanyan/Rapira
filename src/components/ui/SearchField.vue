<template>
  <div class="px-2.5 py-3 flex items-center bg-gray-100 rounded-md">
    <label :for="name" class="me-2.5 text-gray-300"><IconLoupe /></label>
    <input
      :id="name"
      :name="name"
      :placeholder="placeholder"
      v-model="inputData"
      class="bg-transparent outline-none text-sm w-full"
    />
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { computed } from 'vue';
import IconLoupe from '@/components/icons/IconLoupe.vue';

const props = defineProps({
  name: { type: String, required: true },
  placeholder: { type: String },
  modelValue: { type: String as PropType<string>, default: '' }
});

const emit = defineEmits(['update:modelValue']);

const inputData = computed({
  get: (): string => props.modelValue,
  set: (value: string) => emit('update:modelValue', value)
});
</script>

<style module lang="scss"></style>
