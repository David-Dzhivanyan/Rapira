<template>
  <header class="bg-black text-white">
    <div class="container mx-auto flex items-center relative py-6 px-5 lg:px-0">
      <IconBurger class="block lg:hidden me-4" @click="toggleMenu" />
      <nav
        v-if="isMenuOpen"
        class="flex flex-col absolute p-2 bg-white top-3/4 rounded-md border border-gray-100"
        @click="toggleMenu"
      >
        <RouterLink to="/" class="px-2 py-1 rounded-lg text-black" activeClass="bg-gray-100">
          Главная
        </RouterLink>
        <RouterLink to="/blog" class="px-2 py-1 rounded-lg text-black" activeClass="bg-gray-100">
          Блог
        </RouterLink>
      </nav>
      <img
        class="lg:me-20"
        alt="logo"
        title="logoipsum"
        src="@/assets/logo.svg"
        width="150"
        height="30"
      />

      <nav class="hidden lg:block">
        <RouterLink to="/" class="px-3.5 py-2 rounded-lg" activeClass="bg-white/10">
          Главная
        </RouterLink>
        <RouterLink to="/blog" class="px-3.5 py-2 rounded-lg" activeClass="bg-white/10">
          Блог
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import IconBurger from '@/components/icons/IconBurger.vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style lang="scss" module></style>
