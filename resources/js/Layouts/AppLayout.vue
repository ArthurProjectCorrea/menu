<template>
    <main class="flex w-screen h-screen text-gray-600">
        <NavBar></NavBar>
        <article class="w-full h-full">

            <slot />
        </article>
    </main>
</template>
<script setup>
import { Link } from "@inertiajs/vue3";
import NavBar from "@/Layouts/NavBar.vue";

</script>

