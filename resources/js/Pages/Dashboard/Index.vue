<script setup>
import { Head } from '@inertiajs/inertia-vue3'
import PetitionsList from '@/Components/Petitions/PetitionsList.vue'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
</script>

<template>
    <Head><title>حسابي</title></Head>

    <AuthenticatedLayout>

        <petitions-list></petitions-list>

        <template v-slot:sidebar>
            qq
        </template>

    </AuthenticatedLayout>
</template>
