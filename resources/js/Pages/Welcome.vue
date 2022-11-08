<script setup>
import { Head } from '@inertiajs/inertia-vue3'
import NabBar from '@/Components/nav/NabBar.vue'
import HeroSection from '@/Components/home/HeroSection.vue'
import Highlights from '@/Components/home/Highlights.vue'
import Petitions from '@/Pages/Petitions.vue'

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String
})

</script>

<template>
    <Head>
        <title>Welcome</title>
    </Head>


    <nab-bar/>

    <hero-section/>

    <Highlights/>

    <Petitions/>


</template>
