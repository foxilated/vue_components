<script setup>
import { ref } from 'vue';

const isModalOpen = ref(false);
</script>
<template>
  <Teleport to="#modal">
    <!-- Modal Background -->
    <div
      class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center">
      <!-- Modal -->
      <div class="relative bg-white px-8 py-16 shadow-lg rounded-2xl"></div>
    </div>
  </Teleport>
</template>
