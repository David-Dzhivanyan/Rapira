<template>
  <label
    :for="name"
    :title="placeholder"
    :class="[
      'px-3.5 py-2 flex items-center rounded-3xl relative cursor-pointer',
      isChecked ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-500'
    ]"
  >
    <input
      :id="name"
      :name="name"
      type="checkbox"
      class="h-0 w-0 pointer-events-none absolute"
      :checked="isChecked"
      @change="handleChange"
    />
    <span class="me-2.5 leading-none">{{ placeholder }}</span>
    <IconCheck v-if="isChecked" />
    <IconPlus v-else />
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import IconCheck from '@/components/icons/IconCheck.vue';
import IconPlus from '@/components/icons/IconPlus.vue';

const props = defineProps({
  name: { type: String, required: true },
  placeholder: { type: String },
  checked: { type: Boolean, default: false }
});

const emit = defineEmits(['update:checked']);

const isChecked = computed({
  get: () => props.checked,
  set: (value: boolean) => {
    emit('update:checked', {
      tag: { name: props.name, placeholder: props.placeholder },
      isChecked: value
    });
  }
});

const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  isChecked.value = target.checked;
};
</script>

<style module lang="scss"></style>
