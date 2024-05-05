<script setup>
import HomeHeroInfoBlock from './HomeHeroInfoBlock.vue';
</script>

<template>
    <div class="relative w-full h-screen overflow-hidden -mb-[7%]">
        <iframe class="absolute top-[-55px] left-0 right-0 w-full h-[calc(100%+55px)] object-cover z-0" src="https://www.youtube.com/embed/_YUzQa_1RCE?si=0cUWMgPLM45w_sId" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        <div class="absolute left-0 right-0 bottom-0 h-full shadow-[inset_0px_-130px_240px_0px_rgba(0,0,0)] z-10 pointer-events-none"></div>

        <HomeHeroInfoBlock />
    </div>
</template>


