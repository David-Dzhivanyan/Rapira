<script setup lang="ts">
import Header from '@/components/Header.vue';
</script>

<template>
  <Header />
  <main class="bg-gray-200 grow">
    <RouterView />
  </main>
</template>

<style lang="scss" module></style>
