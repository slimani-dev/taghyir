<script setup lang="ts">


import MainLayout from '@/Layouts/MainLayout.vue'
import SidePanel from "@/Components/SidePanel.vue";
import {reactive} from "vue";

const petition = reactive({
    id: 1,
    img: 'https://katen-template.netlify.app/html/images/posts/post-lg-1.jpg',
    title: 'كيف تصبح أفضل مع البناء في شهر واحد',
    excerpt: 'بعيدًا ، خلف كلمة الجبال ، بعيدًا عن بلاد فوكاليا وكونسونانتيا ، تعيش النصوص العمياء. منفصلين يعيشون في كتاب علامات البستان مباشرة على ساحل علم الدلالات ، وهو محيط لغوي كبير.',
    signatures: 1255,
    sponsors: 64,
    category: 'الوطن',
    date: '2022-01-08',
    tags: [
        'فيديو', 'شائع', 'مميز',
        'فيديو', 'شائع', 'مميز',
        'فيديو', 'شائع', 'مميز',
        'فيديو', 'شائع', 'مميز',
        'فيديو', 'شائع', 'مميز',
        'فيديو', 'شائع', 'مميز',
        'فيديو', 'شائع', 'مميز',
    ],
    author: {
        id: 1,
        name: 'سارة',
        avatar: 'https://katen-template.netlify.app/html/images/other/author-sm.png'
    }
},)


</script>

<template>

    <main-layout>
        <ol class="mb-5 flex text-gray-400">
            <li class="">
                <a class="hover:text-red-500" href="#">الرئيسية</a>
            </li>
            <li class="ms-2">
                <a class="before:content-['/'] before:text-gray-500 before:float-start before:pe-2 hover:text-red-500 "
                   href="#"> اقتراحات </a>
            </li>
            <li class="ps-2 hidden md:list-item">
                <p class="before:content-['/'] before:text-gray-500 before:float-start before:pe-2"> 3 طرق سهلة لجعل
                    iPhone الخاص بك
                    أسرع </p>
            </li>
        </ol>
        <div class="mt-6 space-y-8 pb-96">
            <div class="">
                <h1 class="text-4xl font-bold mb-4">3 طرق سهلة لجعل iPhone الخاص بك أسرع</h1>
                <ul class="block text-gray-400">
                    <li class="inline-block me-3 list-none after:inline-block after:bg-red-500 after:align-middle
                        after:h-1 after:w-1 after:ms-2 ms:after:ms-4 after:relative after:top-[-1px]">
                        <a href="#" class="hover:text-red-500">
                            <img class="inline-block align-middle h-auto w-8 me-3  rounded-full"
                                 :src="petition.author.avatar" alt="">
                            {{ petition.author.name }}
                        </a>
                    </li>
                    <li class="inline-block me-3 list-none after:inline-block after:bg-red-500 after:align-middle
                        after:h-1 after:w-1 after:ms-2 ms:after:ms-4 after:relative after:top-[-1px]">
                        {{ petition.date }}
                    </li>
                    <li class="inline-block">
                        التعليقات (67)
                    </li>
                </ul>
            </div>

            <img class="rounded-lg w-full"
                 :src="petition.img"
                 alt="">

            <div class="text-gray-500 space-y-4">
                <p> اللغات الأوروبية أعضاء في نفس العائلة. وجودهم المفصول هو اسطورة. بالنسبة للعلوم والموسيقى والرياضة
                    وما إلى ذلك ، تستخدم أوروبا نفس المفردات. تختلف اللغات فقط في قواعدها ونطقها وكلماتها الأكثر
                    شيوعًا.</p>
                <p> يدرك الجميع سبب الرغبة في إنشاء لغة مشتركة جديدة: يمكن للمرء أن يرفض دفع أتعاب المترجمين الباهظين.
                    لتحقيق ذلك ، سيكون من الضروري أن يكون لديك قواعد موحدة ونطق وكلمات أكثر شيوعًا.</p>

                <img class="rounded-lg w-full" src="https://katen-template.netlify.app/html/images/posts/post-lg-2.jpg"
                     alt="">

                <p>تختلف اللغات فقط في قواعدها ونطقها وكلماتها الأكثر شيوعًا. يدرك الجميع لماذا تكون لغة مشتركة جديدة
                    مرغوبة.

                    ...
                    يمكن للمرء أن يرفض أن يدفع لمترجمين باهظي الثمن. لتحقيق ذلك ، سيكون من الضروري أن يكون لديك قواعد
                    موحدة ونطق وكلمات أكثر شيوعًا.

                    إذا اجتمعت عدة لغات ، فإن قواعد اللغة الناتجة تكون أكثر بساطة وانتظامًا من اللغات الفردية. ستكون
                    اللغة المشتركة الجديدة أكثر بساطة وانتظامًا من اللغات الأوروبية الحالية. ستكون بسيطة مثل أوكسيدنتال.
                    في الواقع ، ستكون شركة أوكسيدنتال.

                    انتشرت مجموعة من عينات النسيج على الطاولة - كان سامسا بائعًا متجولًا - وفوقها علق صورة كان قد قطعها
                    مؤخرًا من مجلة مصورة ووضعها في إطار جميل مذهّب.

                    يجب أن أكون غير قادر على رسم ضربة واحدة
                    ماذا لو أنام قليلا
                    انتشرت مجموعة من عينات النسيج
                    العديد من رجليه ، نحيفة بشكل مثير للشفقة مقارنة بـ
                    استلقى على ظهره الذي يشبه الدروع
                    استيقظ جريجور سامسا من أحلام مضطربة
                    بالنسبة لشخص إنجليزي ، سيبدو الأمر وكأنه لغة إنجليزية مبسطة ، كما أخبرني أحد أصدقائي المتشككين في
                    كامبريدج ما هي شركة أوكسيدنتال. اللغات الأوروبية أعضاء في نفس العائلة. وجودهم المفصول هو اسطورة.
                    بالنسبة للعلوم والموسيقى والرياضة وما إلى ذلك ، تستخدم أوروبا نفس المفردات.</p>
            </div>

            <hr class="border-gray-300">

            <div class="flex justify-between">
                <div>
                    <a v-for="tag in petition.tags"
                       :key="tag"
                       href="#"
                       class="text-gray-400 inline-block border border-gray-200 text-sm ps-3 pe-4 py-1 my-1 me-1 rounded-full
                        hover:text-red-500 hover:border-red-500">
                        #{{ tag }}
                    </a>
                </div>
                <div class="shrink-0 flex flex-row">
                    <a href="#" class="me-4 hover:text-red-500"><i class="ri-facebook-fill"></i></a>
                    <a href="#" class="me-4 hover:text-red-500"><i class="ri-twitter-fill"></i></a>
                    <a href="#" class="me-4 hover:text-red-500"><i class="ri-instagram-line"></i></a>
                    <a href="#" class="me-4 hover:text-red-500"><i class="ri-youtube-fill"></i></a>
                    <a href="#" class="hover:text-red-500"><i class="ri-mail-fill"></i></a>
                </div>
            </div>
        </div>

        <template v-slot:sidebar>
            <side-panel></side-panel>
        </template>
    </main-layout>

</template>

<script lang="ts">
export default {
    name: 'Petition'
}
</script>

<style scoped>

</style>
