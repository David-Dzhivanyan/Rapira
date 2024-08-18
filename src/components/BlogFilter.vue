<template>
  <div tabindex="0" class="collapse">
    <div class="collapse-title flex justify-between items-center">
      <div class="flex items-center">
        <h1 class="text-slate-950 text-3xl font-bold me-10">Блог</h1>
        <TextField name="blog-filter" placeholder="Поиск" class="w-96" />
      </div>
      <div class="text-gray-300 flex items-center hover:text-black group">
        <span class="me-1.5">Фильтр</span> <IconArrowBottom class="group-hover:fill-black" />
      </div>
    </div>
    <div class="collapse-content">
      <p>tabindex="0" attribute is necessary to make the div focusable</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import TextField from '@/components/ui/TextField.vue';
import IconArrowBottom from '@/components/icons/IconArrowBottom.vue';
</script>

<style lang="scss" module></style>
