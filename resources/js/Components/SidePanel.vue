<script setup lang="ts">
import {Link} from '@inertiajs/inertia-vue3'
import worldMap from '@/../assets/img/world-bg.png'
import {reactive} from "vue";

const categories = reactive({
    data: [
        {
            id: 1,
            name: 'نمط الحياة',
            count: 5
        },
        {
            id: 2,
            name: 'نمط الحياة',
            count: 5
        },
        {
            id: 3,
            name: 'نمط الحياة',
            count: 5
        },
        {
            id: 4,
            name: 'نمط الحياة',
            count: 5
        },
        {
            id: 5,
            name: 'نمط الحياة',
            count: 5
        },
        {
            id: 6,
            name: 'نمط الحياة',
            count: 5
        },
        {
            id: 7,
            name: 'نمط الحياة',
            count: 5
        }
    ]
})

</script>

<template>
    <div class="space-y-8 sticky top-28">

        <slot name="petition-details"></slot>

        <div class="grow relative rounded-lg border border-gray-200 px-6 py-12  text-center space-y-6">
            <div class="absolute inset-0 -z-10">
                <img :src="worldMap" class="h-full w-full object-cover" alt="">
            </div>
            <Link class="font-black text-3xl"
                  :href="$route('home')">
                التغيير
                <span class="text-red-500">.</span>
            </Link>

            <p>
                نريد مساعدة الناس على بدء الحملات ، وحشد المؤيدين ، والعمل مع صانعي القرار لإيجاد الحلول.
            </p>

            <div class="inline-flex flex-row">
                <a href="#" class="me-4"><i class="ri-facebook-fill"></i></a>
                <a href="#" class="me-4"><i class="ri-twitter-fill"></i></a>
                <a href="#" class="me-4"><i class="ri-instagram-line"></i></a>
                <a href="#" class=""><i class="ri-youtube-fill"></i></a>
            </div>
        </div>

        <div class="grow relative rounded-lg border border-gray-200 px-6 py-12 space-y-6">
            <h3 class="text-lg font-bold text-center">التصنيفات الاكثر شيوعا</h3>
            <div class="text-center">
                <svg class="inline-block" width="33" height="6" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stop-color="#FE4F70"/>
                            <stop offset="100%" stop-color="#FFA387"/>
                        </linearGradient>
                    </defs>
                    <path
                        d="M33 1c-3.3 0-3.3 4-6.598 4C23.1 5 23.1 1 19.8 1c-3.3 0-3.3 4-6.599 4-3.3 0-3.3-4-6.6-4S3.303 5 0 5"
                        stroke="url(#gradient)" stroke-width="2" fill="none"/>
                </svg>
            </div>
            <ul>
                <li v-for="category in categories.data"
                    :key="category.id"
                    class="leading-10 after:w-full after:h-0.5 after:block after:bg-gradient-to-l after:from-gray-200 after:to-transparent">
                    <i class="ri-arrow-left-s-line align-middle text-red-500 me-6"></i>
                    <a href="#" class="hover:text-red-500">{{ category.name }}</a>
                    <span class="float-end">({{ category.count }})</span>
                </li>
            </ul>
        </div>
    </div>
</template>


<script lang="ts">
export default {
    name: 'SidePanel'
}
</script>

<style scoped lang="scss">
@keyframes progress {
    0% {
        stroke-dasharray: 0 100;
    }
}

.circle {
    animation: progress 2s ease-out forwards;
}
</style>
