<script setup>
import Layout from "@/Layouts/AppLayout.vue";
import { Head } from "@inertiajs/vue3";
</script>

<template>
    <Layout>
        <Head title="Welcome" />
        <div class="flex flex-col items-center justify-center w-full h-full">
            <h1>Welcome</h1>
            <p>Hello, welcome to your first Inertia app!</p>
        </div>
    </Layout>
</template>
