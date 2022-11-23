<script setup>
import { getPosts } from '@/api/utils';
const posts = await getPosts();
</script>

<template>
  <main class="flex items-center justify-center h-screen">
    {{ posts }}
  </main>
</template>
