<script setup>
import { computed } from 'vue';
import HomeHero from '@/components/Home/HomeHero.vue';
import CollectionList from '../components/_shared/Collection/CollectionList.vue';
import { useMoviesStore } from "@/stores/movies";

const store = useMoviesStore();
const isLoading = computed(() => store.Loading)
const genres = computed(() => store.allGenres)
</script>

<template>
    <HomeHero />

    <span v-if="isLoading" class="loading loading-spinner loading-md relative mx-auto z-20 block" />

    <template v-for="item in genres" :key="item" v-else>
        <CollectionList :title="item" />
    </template>
</template>
