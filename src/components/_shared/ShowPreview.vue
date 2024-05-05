<script setup>
import { fetchShowData } from "../../api/FetchData";
import ThumbUp from "vue-material-design-icons/ThumbUp.vue";

const props = defineProps({ movie: Object });
const show_info = props.movie._embedded ? props.movie._embedded.show : '';

const params = {
    show: show_info.id
}
</script>

<template>
    <div class="overflow-hidden rounded-md w-[250px] h-full">
        <transition name="fade">
            <template v-if="props.movie._embedded">
                <router-link :to="{ name: 'Watch', params: params }">
                    <div class="w-full h-[200px] overflow-hidden relative">
                        <div class="badge badge-secondary absolute top-2 left-2" v-if="props.movie.number">
                            s{{ props.movie.season }}.e{{ props.movie.number }}
                        </div>

                        <img v-if="show_info.image" :src="show_info.image.medium" :alt="show_info.name" class="w-full h-full object-cover object-top" />

                        <div v-else class="w-full h-full bg-gray-600"></div>

                        <h3 v-if="show_info.name" :title="show_info.name" class="text-white text-left text-sm md:text-base lg:text-xl lg:font-semibold text_shadow max-w-[90%] absolute bottom-3 left-3 line-clamp-1">
                            {{ show_info.name }}
                        </h3>
                    </div>

                    <div class="p-4 bg-neutral">
                        <div class="flex items-center gap-1 flex-wrap mb-2">
                            <div class="badge badge-primary" v-if="show_info.rating && show_info.rating.average !== null">
                                {{ show_info.rating.average }}
                            </div>

                            <div class="badge badge-accent" v-if="show_info.status">
                                {{ show_info.status }}
                            </div>

                            <div class="badge badge-ghost" v-if="show_info.language">
                                {{ show_info.language }}
                            </div>
                        </div>

                        <ul class="flex flex-wrap gap-1">
                            <li v-for="genre in show_info.genres" :key="genre" class="badge badge-outline">
                                {{ genre }}
                            </li>
                        </ul>
                    </div>
                </router-link>
            </template>

            <span class="loading loading-dots loading-sm" v-else></span>
        </transition>
    </div>
</template>
