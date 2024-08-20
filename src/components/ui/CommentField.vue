<template>
  <div class="relative">
    <label
      :for="name"
      :class="[$style.label, isFocus && $style.focused, !isValid && $style.error]"
      class="flex items-center ps-2.5 pe-8 py-3 border-gray-200 border rounded-md relative"
    >
      <textarea
        :id="name"
        :name="name"
        :placeholder="placeholder"
        :class="$style.textarea"
        class="bg-transparent outline-none text-sm w-full placeholder-gray-400 h-full resize-none"
        v-model="inputData"
        @focus="toggleFocus"
        @blur="toggleFocus"
      />
    </label>
    <IconClose
      :class="$style.close"
      class="opacity-0 absolute z-10 top-2.5 right-4 cursor-pointer text-gray-300"
      @click="clear"
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
  modelValue: { type: String as PropType<string>, default: '' },
  isValid: { type: Boolean, default: true },
  maxLetter: { type: Number, default: 10000 }
});

const emit = defineEmits(['update:modelValue', 'clear']);

const inputData = computed({
  get: (): string => props.modelValue,
  set: (value: string) => emit('update:modelValue', value)
});

const isFocus = ref(false);

const toggleFocus = () => {
  isFocus.value = !isFocus.value;
};

const clear = () => {
  emit('clear');
};
</script>

<style module lang="scss">
.label {
  transition: 0.2s ease-in-out all;
  transition-property: border, box-shadow;
}

.focused {
  border: 1px solid #3e97ff;
  box-shadow: 0 0 0 2px #3e97ff52;

  .textarea {
    height: 120px;
  }

  & ~ .close {
    opacity: 1;
  }
}

.error {
  border: 1px solid #f1416c;
  box-shadow: 0 0 0 2px #f1416c52;
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
