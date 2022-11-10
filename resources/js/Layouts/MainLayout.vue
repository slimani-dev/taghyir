<script setup>
import NabBar from '@/Components/nav/NabBar.vue'
import HeroSection from '@/Components/home/HeroSection.vue'
import Highlights from '@/Components/home/Highlights.vue'


</script>

<template>
    <nab-bar/>

    <hero-section/>

    <Highlights/>

    <div class="lg:flex lg:flex-row-reverse max-w-6xl mx-auto lg:px-6 xl:px-0">
        <div class="lg:w-2/3 px-4 me-4 lg:me-0">
            <slot/>
        </div>
        <div class="lg:w-1/3 px-4 me-4 lg:me-0 my-8 lg:my-0">
            <slot name="sidebar"></slot>
        </div>
    </div>


</template>


<script>
export default {
    name: 'MainLayout'
}
</script>

<style scoped>

</style>
