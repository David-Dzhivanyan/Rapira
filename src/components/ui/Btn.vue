<template>
  <button
    @click="handleClick"
    :class="[
      'flex items-center rounded-md relative font-semibold text-sm px-3.5 py-2 hover:opacity-80',
      primary ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-500',
      disabled ? 'bg-gray-100 text-gray-400' : ''
    ]"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
const props = defineProps({
  primary: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false }
});

const emit = defineEmits(['btn-click']);

const handleClick = () => {
  emit('btn-click');
};
</script>

<style lang="scss" module></style>
