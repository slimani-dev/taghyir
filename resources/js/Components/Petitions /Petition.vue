<script setup lang="ts">

import {Petition as PetitionClass} from '@/types/Petition'
import {ref} from "vue";

const props = defineProps<{
    petition: PetitionClass
}>()

const toggleShare = ref(false)

</script>

<template>
    <div class="grow relative rounded-lg shadow-lg">
        <div class="aspect-[2/1] rounded-t-lg">
            <img class="rounded-t-lg w-full h-full object-cover"
                 :src="petition.img"
                 alt="">
        </div>
        <a href="#" class="absolute top-4 end-4 font-bold text-white py-2 px-4 bg-red-500 rounded-lg hover:bg-red-600">
            {{ petition.category }}
        </a>

        <a href="#"
           class="absolute top-4 start-4 font-bold text-white py-2 px-4 bg-red-500 rounded-lg hover:bg-red-600">
            الامضاءات {{ petition.signatures }}
        </a>
        <div class="p-12 pb-6">
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
                <li class="hidden sm:inline-block me-3 list-none after:inline-block after:bg-red-500 after:align-middle
                        after:h-1 after:w-1 after:ms-2 ms:after:ms-4 after:relative after:top-[-1px]">
                    الداعمين <span>(15)</span>
                </li>
                <li class="inline-block">
                    التعليقات (67)
                </li>
            </ul>
            <h2 class="my-4 text-xl md:text-3xl font-bold hover:text-red-500">{{ petition.title }}</h2>
            <p class="my-8 block text-gray-500">{{ petition.excerpt }}</p>
            <hr class="mb-6 border-gray-200">

            <div class="flex flex-row justify-between items-center h-8">
                <div class="flex flex-row">
                    <button @click="toggleShare = !toggleShare"
                            :class="toggleShare ? 'text-red-500': ''"
                            class="cursor-pointer sm:hidden me-4 hover:text-red-500">
                        <i class="ri-share-fill"></i>
                    </button>
                    <div :class="!toggleShare ? 'hidden ': 'flex'" class="sm:flex flex-row">
                        <a href="#" class="me-4 hover:text-red-500"><i class="ri-facebook-fill"></i></a>
                        <a href="#" class="me-4 hover:text-red-500"><i class="ri-twitter-fill"></i></a>
                        <a href="#" class="me-4 hover:text-red-500"><i class="ri-instagram-line"></i></a>
                        <a href="#" class="me-4 hover:text-red-500"><i class="ri-youtube-fill"></i></a>
                        <a href="#" class="hover:text-red-500"><i class="ri-mail-fill"></i></a>
                    </div>
                </div>
                <a href="#" :class="toggleShare ? 'hidden': 'inline-block'"
                   class="sm:inline-block hover:text-red-500 transition duration-200 text-lg font-bold">
                    قراءة المزيد <i class="ri-arrow-left-s-line align-middle"></i>
                </a>
            </div>
        </div>
    </div>

</template>
<script lang="ts">
export default {
    name: 'Petition'
}
</script>
