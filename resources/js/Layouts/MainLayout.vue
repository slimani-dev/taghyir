<script setup>
import NabBar from '@/Components/nav/NabBar.vue'


</script>

<template>
    <nab-bar/>

    <slot name="hero"></slot>

    <slot name="highlights"/>

    <div class="lg:flex lg:flex-row pt-8 max-w-6xl mx-auto md:px-6 lg:px-0">
        <div class="lg:w-2/3 px-4">
            <slot/>
        </div>
        <div class="lg:w-1/3 px-4 my-8 lg:my-0">
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
