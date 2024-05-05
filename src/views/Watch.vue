<script setup>
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import { computed, ref } from "vue";
import { fetchShowData } from "../api/FetchData";

const route = useRoute();
const { show } = route.params;
let movie = ref(await fetchShowData(show));

onBeforeRouteUpdate(async (to, from, next) => {
    const { show: newShow } = to.params;
    movie.value = await fetchShowData(newShow);
    next();
});
</script>

<template>
    <div class="container">
        <div class="py-20 lg:flex gap-10 items-start">
            <transition name="fade">
                <img :src="movie.image.original" v-if="movie.image" :alt="movie.name" class="lg:w-1/3" />
            </transition>

            <div class="px-4 xl:px-0">
                <h1 class="my-6 text-white font-semibold text-2xl lg:text-3xl">
                    {{ movie.name }}
                </h1>

                <ul class="flex flex-wrap gap-1 mb-6">
                    <li v-for="genre in movie.genres" :key="genre" class="badge badge-outline">
                        {{ genre }}
                    </li>
                </ul>

                <div class="space-y-6">
                    <p v-if="movie.averageRuntime != null">
                        Average runtime: {{ movie.averageRuntime }}
                    </p>

                    <div class="flex gap-2 items-center" v-if="movie.status">
                        <p class="">Movie status</p>

                        <div class="badge badge-accent">
                            {{ movie.status }}
                        </div>
                    </div>

                    <div class="flex gap-2 items-center" v-if="movie.language">
                        <p class="">Movie language</p>

                        <div class="badge badge-neutral">
                            {{ movie.language }}
                        </div>
                    </div>

                    <div class="flex gap-2 items-center" v-if="movie.premiered">
                        <p class="">Movie premiered</p>

                        <div class="badge badge-ghost">
                            {{ movie.premiered }}
                        </div>
                    </div>

                    <div class="flex gap-2 items-center" v-if="movie.ended">
                        <p class="">Movie ended</p>

                        <div class="badge badge-ghost">
                            {{ movie.ended }}
                        </div>
                    </div>

                    <div class="flex gap-2 items-center" v-if="movie.officialSite">
                        <p class="whitespace-nowrap">Official site</p>

                        <a class="link link-primary truncate lg:max-w-[60%]">{{ movie.officialSite }}</a>
                    </div>

                    <div class="" v-if="movie.summary">
                        <p class="mb-2">Movie summary:</p>
                        <div v-html="movie.summary" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>