<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green text-center font-medium text-5xl -top-2.5 lg:text-left">{{ msg }}</h1>
    <h3 class="text-center text-2xl lg:text-left">
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>
  </div>
</template>

