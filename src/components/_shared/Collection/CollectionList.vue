<script setup>
import { computed } from "vue";
import ShowPreview from "../ShowPreview.vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { useMoviesStore } from "@/stores/movies";

const props = defineProps({
    title: {
        type: String,
        default: "",
    },
});

const store = useMoviesStore();
const movies = computed(() => store.moviesSortedByGenre(props.title));

const settings = {
    itemsToShow: 1,
    snapAlign: "start",
};
const breakpoints = {
    600: {
        itemsToShow: 2,
    },
    800: {
        itemsToShow: 3,
    },
    1100: {
        itemsToShow: 4,
    },
    1300: {
        itemsToShow: 5,
    },
};
</script>

<template>
    <div class="container relative z-10 pb-14">
        <h2 v-if="props" class="text-white mb-4 text-base md:text-xl lg:text-2xl lg:font-bold text_shadow px-4">
            {{ props.title }}
        </h2>

        <Carousel v-bind="settings" :breakpoints="breakpoints">
            <Slide v-for="movie in movies" :key="movie">
                <div class="carousel__item h-full">
                    <ShowPreview :movie="movie" />
                </div>
            </Slide>

            <template #addons>
                <Navigation />
            </template>
        </Carousel>
    </div>
</template>
