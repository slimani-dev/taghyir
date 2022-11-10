<script setup>
import { Head } from '@inertiajs/inertia-vue3'
import MainLayout from '@/Layouts/MainLayout.vue'
import PetitionsList from '@/Components/Petitions/PetitionsList.vue'
import SidePanel from '@/Components/SidePanel.vue'
import HeroSection from '@/Components/home/HeroSection.vue'
import Highlights from '@/Components/home/Highlights.vue'

</script>

<template>
    <Head>
        <title>Welcome</title>
    </Head>


    <main-layout>
        <template v-slot:hero>
            <hero-section/>
        </template>

        <template v-slot:highlights>
            <highlights></highlights>
        </template>

        <petitions-list></petitions-list>

        <template v-slot:sidebar>
            <side-panel></side-panel>
        </template>
    </main-layout>

</template>
