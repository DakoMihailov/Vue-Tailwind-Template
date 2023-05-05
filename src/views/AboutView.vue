<script setup lang="ts">

import HelloWorld from '../components/HelloWorld.vue'
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main class="flex">
    <header class="leading-6 max-h-screen lg:flex lg:place-items-center lg:mr-20">
    <img alt="Vue logo" class="block mt-0 mx-auto mb-8 lg:block lg:mt-0 lg:mr-8 lg:mb-0 lg:ml-0" src="@/assets/logo.svg" width="125" height="125" />

    <div class="lg:flex place-items-start flex-wrap">
      <HelloWorld msg="You did it!" />
    </div>
  </header>
  <TheWelcome />
    
  </main>
</template>
