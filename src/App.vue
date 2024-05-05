<script setup lang="ts">
import { fetchDateData } from './api/FetchData';
import Header from './components/_shared/Header/Header.vue';

fetchDateData();
</script>

<template>
  <Header data-theme="dark" />

  <main data-theme="dark">
    <Suspense>
      <router-view />
    </Suspense>
  </main>

</template>
