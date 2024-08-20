<template>
  <div class="bg-white">
    <div
      :class="[$style.wrapper, opened && $style.open]"
      class="container mx-auto py-5 px-6 md:px-8"
    >
      <div class="flex items-center flex-wrap gap-2">
        <h1 class="text-slate-950 text-3xl font-bold me-8">Блог</h1>
        <SearchField
          name="blog-filter"
          placeholder="Поиск"
          class="w-full order-1 md:w-96 md:order-none"
          v-model="searchText"
          @input="onInput"
        />
        <div class="flex ms-auto">
          <span
            v-if="isEmptyFilter"
            class="text-blue-600 cursor-pointer me-1.5 hover:text-blue-500"
            @click="clear"
          >
            Очистить
          </span>
          <div
            class="text-gray-300 flex items-center group cursor-pointer hover:text-black"
            @click="toggleOpen"
          >
            <span class="me-1.5" v-if="opened">Скрыть фильтр</span>
            <span class="me-1.5" v-else>Фильтр</span>
            <IconArrowBottom :class="$style.arrow" />
          </div>
        </div>
      </div>
      <div :class="$style.content" class="flex items-center flex-wrap gap-2 h-0 overflow-hidden">
        <FilterCheckbox
          v-for="{ name, placeholder } in checkboxList"
          :name="name"
          :placeholder="placeholder"
          :key="name"
          :checked="tags.find((item) => item.name === name)"
          @update:checked="onChecked"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType, ref } from 'vue';
import type { CheckboxItem, Filter, Tag } from '@/utils/blogInterface';
import IconArrowBottom from '@/components/icons/IconArrowBottom.vue';
import FilterCheckbox from '@/components/ui/FilterCheckbox.vue';
import SearchField from '@/components/ui/SearchField.vue';

defineProps({
  checkboxList: { type: Array as PropType<CheckboxItem[]> },
  filterObject: { type: Object as PropType<Filter> }
});

const emit = defineEmits(['update:filters']);

const opened = ref(false);
const searchText = ref('');
const tags = ref<Tag[]>([]);

const isEmptyFilter = computed(() => {
  return searchText.value || tags.value.length;
});

const filterReturn = computed(() => {
  return { searchText: searchText.value, tags: tags.value };
});

const clear = () => {
  tags.value = [];
  searchText.value = '';
  emit('update:filters', filterReturn.value);
};

const onInput = () => {
  emit('update:filters', filterReturn.value);
};

const onChecked = ({ tag, isChecked }: CheckedTagInterface) => {
  tags.value = tags.value.filter((item: Tag) => item.name !== tag.name);
  isChecked && tags.value.push(tag);
  emit('update:filters', filterReturn.value);
};

const toggleOpen = () => {
  opened.value = !opened.value;
};

interface CheckedTagInterface {
  tag: Tag;
  isChecked: boolean;
}
</script>

<style lang="scss" module>
.wrapper {
  @media (min-width: 1024px) {
    transition: 0.2s ease-in-out padding;
  }
}

.open {
  padding: 20px 32px 0;

  .content {
    padding: 20px 0;
    height: auto;

    @media (min-width: 1024px) {
      height: 70px;
    }
  }

  .arrow {
    transform: rotate(180deg);
  }
}

.content {
  padding: 0;

  @media (min-width: 1024px) {
    transition: 0.2s ease-in-out all;
    transition-property: height, padding;
  }
}

.arrow {
  transition: 0.2s ease-in-out transform;
}
</style>
