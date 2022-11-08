<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/inertia-vue3';
import NabBar from '@/Components/nav/NabBar.vue'
</script>

<template>
    <nab-bar></nab-bar>

    <div class=" flex flex-col sm:justify-center items-center  pt-80 sm:pt-0">
        <div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
            <slot />
        </div>
    </div>
</template>
