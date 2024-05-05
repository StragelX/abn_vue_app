<script setup>
import Menu from 'vue-material-design-icons/Menu.vue';

const props = defineProps({
    routes: {
        type: Object,
    }
});
</script>

<template>
    <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <Menu />
        </div>

        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li v-for="route in props.routes" :key="route.name">
                <router-link :to="route">{{ route.name }}</router-link>
            </li>
        </ul>
    </div>
</template>
