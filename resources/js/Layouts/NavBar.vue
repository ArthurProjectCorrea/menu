<template>
    <nav :class="isClicked ? 'navbar-maximum' : 'navbar-minimum'">
        <!-- LOGO -->
        <div
            class="flex items-center justify-between w-full gap-8 p-4 border-b border-gray-300"
        >
            <div v-show="isClicked">
                <img class="h-8" src="../../images/logo.png" />
            </div>
            <div>
                <button
                    @click="isClicked = !isClicked"
                    class="flex items-center justify-center w-8 h-8"
                >
                    <i
                        :class="
                            isClicked ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
                        "
                    ></i>
                </button>
            </div>
        </div>
        <!-- MODULE -->
        <div class="w-full p-2 border-b border-gray-300">
            <SelectModule />
        </div>
        <!-- SEARCH -->
        <div class="p-2 border-b border-gray-300">
            <Search v-show="isClicked">
                <i
                    class="absolute left-0 py-4 pl-6 fa-solid fa-magnifying-glass"
                ></i>
                <input
                    class="w-full h-12 py-2 pl-10 text-lg transition-all duration-150 bg-gray-100 border border-gray-300 rounded-md outline-none focus:border-blue-500"
                    type="text"
                    placeholder="Pesquise..."
                />
            </Search>
            <div
                v-show="!isClicked"
                class="flex items-center justify-center w-12 h-12 p-2 bg-gray-100 border border-gray-300 rounded-md"
            >
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
        <!-- OPTION MENU CUSTOM FROM MODULE -->
        <div class="w-full p-2 overflow-y-auto h-[540px]">
            <template v-for="page in pages">
                <div
                    v-if="page.module_id === moduleAtual"
                    :title="page.label"
                    class=""
                >
                    <a
                        :href="page.route"
                        class="flex items-center gap-2 p-2 rounded-md hover:bg-blue-100 hover:text-blue-500"
                    >
                        <div class="flex items-center justify-center w-8 h-8">
                            <i class="fa-solid" :class="page.icon"></i>
                        </div>
                        <div
                            v-show="isClicked"
                            class="text-sm font-medium uppercase line-clamp-1"
                        >
                            {{ page.label }}
                        </div>
                    </a>
                </div>
            </template>
        </div>
        <!-- OPTION MENU GROUP MENU -->
        <!-- <div class="w-full p-2">
                <template v-for="group in groups">
                    <div
                        v-if="group.id != 1"
                        :title="group.label"
                        class="flex items-center gap-2 p-2 rounded-md hover:bg-blue-100 hover:text-blue-500"
                    >
                        <div class="flex items-center justify-center w-8 h-8">
                            <i class="fa-solid" :class="group.icon"></i>
                        </div>
                        <div
                            v-show="isClicked"
                            class="text-sm font-medium uppercase line-clamp-1"
                        >
                            {{ group.label }}
                        </div>
                    </div>
                </template>
            </div> -->
        <!-- OPTION SYSTEM -->
        <div class="w-full p-2 border-t border-gray-300">
            <div
                title="perfil"
                class="flex items-center gap-2 p-2 rounded-md hover:bg-blue-100 hover:text-blue-500"
            >
                <div class="flex items-center justify-center w-8 h-8">
                    <i class="fa-solid fa-user"></i>
                </div>
                <div v-show="isClicked" class="text-sm font-medium uppercase">
                    <p>PERFIL</p>
                </div>
            </div>
            <div
                title="notificação"
                class="flex items-center gap-2 p-2 rounded-md hover:bg-blue-100 hover:text-blue-500"
            >
                <div class="flex items-center justify-center w-8 h-8">
                    <i class="fa-solid fa-bell"></i>
                </div>
                <div v-show="isClicked" class="text-sm font-medium uppercase">
                    <p>NOTIFICAÇÃO</p>
                </div>
            </div>
            <div
                title="documentação"
                class="flex items-center gap-2 p-2 rounded-md hover:bg-blue-100 hover:text-blue-500"
            >
                <div class="flex items-center justify-center w-8 h-8">
                    <i class="fa-solid fa-book"></i>
                </div>
                <div v-show="isClicked" class="text-sm font-medium uppercase">
                    <p>DOCUMENTAÇÃO</p>
                </div>
            </div>
            <div
                title="sair"
                class="flex items-center gap-2 p-2 rounded-md hover:bg-blue-100 hover:text-blue-500"
            >
                <div class="flex items-center justify-center w-8 h-8">
                    <i class="fa-solid fa-arrow-right-from-bracket"></i>
                </div>
                <div v-show="isClicked" class="text-sm font-medium uppercase">
                    <p>SAIR</p>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";
import data from "@/DB.js";
import ToggleMenu from "../Components/Toggle/ToggleMenu.vue";
import SelectModule from "../Components/SelectModule.vue";

const pages = data.pages;
const modules = data.modules;
const groups = data.groups;
const moduleAtual = 1;
</script>
<script>
export default {
    data() {
        return {
            isClicked: true,
            isModule: true,
        };
    },
};
</script>
<style>
.navbar-maximum {
    @apply flex flex-col items-center justify-between h-full border-r border-gray-300 bg-gray-50;
}

.navbar-minimum {
    @apply flex flex-col items-center justify-between h-full border-r border-gray-300 bg-gray-50;
}
</style>
