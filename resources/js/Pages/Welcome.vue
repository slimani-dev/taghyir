<script setup>
import { Head } from '@inertiajs/inertia-vue3'
import MainLayout from '@/Layouts/MainLayout.vue'
import PetitionsList from '@/Components/Petitions/PetitionsList.vue'
import SidePanel from '@/Components/SidePanel.vue'

</script>

<template>
    <Head>
        <title>Welcome</title>
    </Head>


    <main-layout>
        <petitions-list></petitions-list>

        <template v-slot:sidebar>
            <side-panel></side-panel>
        </template>
    </main-layout>

</template>
