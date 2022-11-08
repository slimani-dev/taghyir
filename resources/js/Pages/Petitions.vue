<script setup>

import { reactive } from 'vue'
import Petition from '@/Pages/Petition.vue'

const petitions = reactive({
    data: [{
        id: 1,
        img: 'https://katen-template.netlify.app/html/images/posts/post-lg-1.jpg',
        title: 'كيف تصبح أفضل مع البناء في شهر واحد',
        excerpt: 'بعيدًا ، خلف كلمة الجبال ، بعيدًا عن بلاد فوكاليا وكونسونانتيا ، تعيش النصوص العمياء. منفصلين يعيشون في كتاب علامات البستان مباشرة على ساحل علم الدلالات ، وهو محيط لغوي كبير.',
        signatures: 1255,
        sponsors: 64,
        category: 'الوطن',
        date: '2022-01-08',
        author: {
            id: 1,
            name: 'Mohamed Slimani',
            avatar: null
        }
    }]
})

</script>

<template>
    <Petition v-for="petition in petitions.data" :key="petition.data" :petition="petition"/>
</template>
<script>
export default {
    name: 'Petitions'
}
</script>
