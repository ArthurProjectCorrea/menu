<template>
    <Layout>
        <Head title="Welcome" />
        <div class="flex flex-col items-center justify-center w-full h-full">
            <h1>Welcome</h1>
            <p>protocolos!</p>
            <SelectModule class="w-2/5"/>
        </div>
    </Layout>
</template>
<script setup>
import Layout from "@/Layouts/AppLayout.vue";
import { Head } from "@inertiajs/vue3";
import SelectModule from "../../../Components/SelectModule.vue";
</script>
