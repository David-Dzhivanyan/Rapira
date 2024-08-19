<template>
  <div class="relative">
    <label
      :for="name"
      :class="[$style.label, isFocus && $style.focused]"
      class="flex items-center px-2.5 py-3 border-gray-200 border rounded-md relative"
    >
      <textarea
        :id="name"
        :name="name"
        :placeholder="placeholder"
        :class="$style.textarea"
        v-model="inputData"
        @focus="toggleFocus"
        @blur="toggleFocus"
        class="bg-transparent outline-none text-sm w-full placeholder-gray-400 h-full resize-none"
      />
    </label>
    <IconClose
      :class="$style.close"
      class="opacity-0 absolute z-10 top-2.5 right-4 cursor-pointer"
    />
  </div>
</template>

<script setup lang="ts">
import { type PropType, ref } from 'vue';
import { computed } from 'vue';
import IconClose from '@/components/icons/IconClose.vue';

const props = defineProps({
  name: { type: String, required: true },
  placeholder: { type: String },
  modelValue: { type: String as PropType<string>, default: '' }
});

const emit = defineEmits(['update:modelValue', 'update:isValid']);

const inputData = computed({
  get: (): string => props.modelValue,
  set: (value: string) => emit('update:modelValue', value)
});

const isFocus = ref<any>(null);

const toggleFocus = () => {
  isFocus.value = !isFocus.value;
};
</script>

<style module lang="scss">
.label {
  transition: 0.2s ease-in-out all;
  transition-property: border, box-shadow;
}

.focused {
  .textarea {
    height: 120px;
  }

  & ~ .close {
    opacity: 1;
  }

  border: 1px solid #3e97ff;
  box-shadow: 0 0 0 2px #3e97ff52;
}

.textarea {
  height: 22px;
  transition: 0.2s ease-in-out all;
  transition-property: height;
}

.close {
  transition: 0.2s ease-in-out all;
  transition-property: opacity;
}
</style>
