<script setup>
import { ref, nextTick } from "vue";
import Magnify from "vue-material-design-icons/Magnify.vue";
import CloseCircleOutline from "vue-material-design-icons/CloseCircleOutline.vue";
import { searchShows } from "../../../api/FetchData";

const showInput = ref(false);
let inputRef = ref("");
let showSearchResults = ref(false);
let searchResult = ref([]);
const searchInput = ref(null);

function toggleInput() {
    setTimeout(() => {
        showInput.value = !showInput.value;
        inputRef.value = "";
        showSearchResults.value = false;
    }, 200);
}

const search = () => {
    if (inputRef.value.length >= 3) {
        searchShows(inputRef.value)
            .then((result) => {
                searchResult.value = result;
            })
            .catch((error) => {
                console.log(error);
            });

        showSearchResults.value = true;
    } else {
        showSearchResults.value = false;
    }
};
</script>

<template>
    <div class="flex md:relative md:left-auto md:right-auto" :class="[showInput ? 'absolute left-2 right-2' : '']">
        <button class="btn btn-square" @click="toggleInput">
            <Magnify />
        </button>

        <transition name="fade">
            <input v-if="showInput" @blur="toggleInput" v-model="inputRef" ref="searchInput" type="text" placeholder="Search" @keyup="search" class="input input-bordered w-full md:w-auto bg-tr" />
        </transition>

        <transition name="fade">
            <ul class="menu bg-base-200 w-[calc(100vw_-_16px)] md:w-full rounded-box absolute top-[calc(100%_+_4px)] shadow-md" v-if="showSearchResults">
                <Suspense>
                    <li v-for="result in searchResult" :key="result.show.id">
                        <router-link :to="{ name: 'Watch', params: { show: result.show.id } }" title="{{ result.show.name }}">{{ result.show.name }}</router-link>
                    </li>
                </Suspense>
            </ul>
        </transition>
    </div>
</template>