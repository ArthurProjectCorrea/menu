<template>
    <div
        class="w-full bg-gray-200 border-2 border-gray-300 rounded-md shadow-sm"
    >
        <div
            v-show="isModule"
            :title="module.label"
            class="flex items-center justify-between gap-2 p-2"
        >
            <div class="flex items-center justify-between gap-2">
                <div
                    class="flex items-center justify-center w-8 h-8 bg-gray-400 rounded-md"
                >
                    <i class="fa-solid" :class="module.icon"></i>
                </div>
                <div
                    v-show="isClicked"
                    class="flex flex-col items-start justify-start uppercase"
                >
                    <p class="text-sm font-bold">
                        {{ module.label }}
                    </p>
                </div>
            </div>
            <button v-show="isClicked" @click="isModule = !isModule">
                <i class="fa-solid fa-pen-to-square"></i>
            </button>
        </div>
        <div
            v-for="ModuleList in modules"
            v-show="!isModule"
            :title="ModuleList.label"
            class="flex items-center justify-between gap-2 p-2"
        >
            <div class="flex items-center justify-between gap-2">
                <div
                    class="flex items-center justify-center w-8 h-8 bg-gray-400 rounded-md"
                >
                    <i class="fa-solid" :class="ModuleList.icon"></i>
                </div>
                <div
                    v-show="isClicked"
                    class="flex flex-col items-start justify-start uppercase"
                >
                    <p class="text-sm font-bold">
                        {{ ModuleList.label }}
                    </p>
                </div>
            </div>
            <button v-show="isClicked" @click="isModule = !isModule">
                <i
                    :class="
                        ModuleList.id === moduleAtual
                            ? 'fa-solid fa-square-check'
                            : 'fa-solid fa-square'
                    "
                ></i>
            </button>
        </div>
    </div>
</template>
<script setup>
import data from "@/DB.js";

const moduleAtual = 1;
const modules = data.modules;
const module = modules.find((module) => module.id === moduleAtual);
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
