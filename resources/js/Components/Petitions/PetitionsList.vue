<script setup>

import { reactive } from 'vue'
import PetitionItem from '@/Components/Petitions/PetitionItem.vue'

const petitions = reactive({
    data: [
        {
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
                avatar: 'https://katen-template.netlify.app/html/images/insta/insta-5.jpg'
            }
        },
        {
            id: 2,
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
                avatar: 'https://katen-template.netlify.app/html/images/insta/insta-5.jpg'
            }
        },
        {
            id: 3,
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
                avatar: 'https://katen-template.netlify.app/html/images/insta/insta-5.jpg'
            }
        },
        {
            id: 4,
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
                avatar: 'https://katen-template.netlify.app/html/images/insta/insta-5.jpg'
            }
        },
        {
            id: 5,
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
                avatar: 'https://katen-template.netlify.app/html/images/insta/insta-5.jpg'
            }
        },
        {
            id: 6,
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
                avatar: 'https://katen-template.netlify.app/html/images/insta/insta-5.jpg'
            }
        },

    ]
})

</script>

<template>
    <div class="space-y-8">
        <PetitionItem v-for="petition in petitions.data" :key="petition.data" :petition="petition"/>
    </div>
</template>
<script>
export default {
    name: 'PetitionsList'
}
</script>
