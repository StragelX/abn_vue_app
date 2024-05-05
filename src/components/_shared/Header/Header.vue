<script setup>
import Home from '@/views/Home.vue';
import HeaderSearch from '@/components/_shared/Header/HeaderSearch.vue';
// import HeaderMobileMenu from '../Header/HeaderMobileMenu.vue';
// import HeaderUser from '../Header/HeaderUser.vue';

// const routes = [
//     { path: '/', name: 'Home', component: Home },
// ];
</script>

<template>
    <div class="container z-50 relative">
        <div class="navbar bg-neutral fixed top-0 left-0 right-0 shadow-sm">
            <div class="navbar-start">
                <!-- <HeaderMobileMenu :routes="{ routes }" /> -->

                <router-link class="btn btn-ghost text-xl" :to="{ name: 'Home' }">
                    TodayEpisodes
                </router-link>

                <!-- <div class="hidden lg:flex">
                    <ul class="menu menu-horizontal px-1 gap-2">
                        <li v-for="route in routes" :key="route.name">
                            <router-link :to="route" class="link no-underline">{{ route.name }}</router-link>
                        </li>
                    </ul>
                </div> -->
            </div>

            <div class="navbar-end">
                <HeaderSearch />

                <!-- <HeaderUser /> -->
            </div>
        </div>
    </div>
</template>