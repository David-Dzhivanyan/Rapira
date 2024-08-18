<template>
  <header class="bg-black text-white">
    <div class="container mx-auto flex items-center py-4">
      <img
        class="me-20"
        alt="logo"
        title="logoipsum"
        src="@/assets/logo.svg"
        width="150"
        height="30"
      />

      <nav>
        <RouterLink to="/" class="px-3.5 py-2 rounded-md" activeClass="bg-white/10">
          Главная
        </RouterLink>
        <RouterLink to="/blog" class="px-3.5 py-2 rounded-md" activeClass="bg-white/10">
          Блог
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style lang="scss" module></style>
