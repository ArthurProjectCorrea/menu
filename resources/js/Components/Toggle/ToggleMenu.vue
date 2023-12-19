<template>
    <button @click="isClicked = !isClicked" class="flex items-center justify-center w-8 h-8 ">
        <i :class="isClicked ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
    </button>
</template>
<script>

export default {
    data() {
        return {
            isClicked: true,
        };
    },
};
</script>
