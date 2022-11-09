<script setup>
import { Head } from '@inertiajs/inertia-vue3'
import NabBar from '@/Components/nav/NabBar.vue'
import HeroSection from '@/Components/home/HeroSection.vue'
import Highlights from '@/Components/home/Highlights.vue'
import Petitions from '@/Components/Petitions /Petitions.vue'
import SidePanel from '@/Components/SidePanel.vue'

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

    <div class="lg:flex lg:flex-row-reverse max-w-6xl mx-auto lg:px-6 xl:px-0">
        <div class="lg:w-2/3 px-4 me-4 lg:me-0">
            <Petitions/>
        </div>
        <div class="lg:w-1/3 px-4 me-4 lg:me-0 py-8 lg:py-0">
            <SidePanel/>
        </div>
    </div>


</template>
