<template>
  <div class="p-3">
    <div class="container mx-auto bg-white rounded-xl p-3 md:p-4 lg:p-7">
      <div
        class="grid grid-cols-1 items-start gap-y-5 md:gap-y-6 md:gap-x-5 lg:gap-y-10 md:grid-cols-2 lg:grid-cols-3"
      >
        <slot />
      </div>
    </div>
  </div>
</template>
