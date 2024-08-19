<template>
  <label
    :for="name"
    :title="placeholder"
    :class="[
      'px-3.5 py-2 flex items-center rounded-3xl relative',
      checked ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-500'
    ]"
  >
    <input
      :id="name"
      :name="name"
      type="checkbox"
      v-model="inputData"
      class="h-0 w-0 pointer-events-none absolute"
    />
    <span class="me-2.5 leading-none">{{ placeholder }}</span>
    <IconCheck v-if="checked" />
    <IconPlus v-else />
  </label>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { computed } from 'vue';
import IconCheck from '@/components/icons/IconCheck.vue';
import IconPlus from '@/components/icons/IconPlus.vue';

const props = defineProps({
  name: { type: String, required: true },
  placeholder: { type: String },
  modelValue: { type: Boolean, default: false }
});

const emit = defineEmits(['update:modelValue']);

const inputData = computed({
  get: (): boolean => props.modelValue,
  set: (value: boolean) => {
    emit('update:modelValue', value);
    checked.value = value;
  }
});

const checked = ref(false);
</script>

<style module lang="scss"></style>
