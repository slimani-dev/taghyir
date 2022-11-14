<script setup lang="ts">
import MainLayout from '@/Layouts/MainLayout.vue'
import SidePanel from "@/Components/SidePanel.vue";
import {onMounted, reactive, Ref, ref} from "vue";

const tabs = reactive({
    elements: [
        {name: 'العريضة', count: 52},
        {name: 'التوقيعات', count: 6},
        {name: 'الاحصاءات', count: 4},
        {name: 'طهور اضافي'},
        {name: 'اخر الاخبار'},
    ] as { name: string, count?: number }[],
    selected: {name: 'العريضة', count: 52} as { name: string, count?: number }
})

const petition = reactive({
    id: 1,
    img: 'https://katen-template.netlify.app/html/images/posts/post-lg-1.jpg',
    title: 'كيف تصبح أفضل مع البناء في شهر واحد',
    excerpt: 'بعيدًا ، خلف كلمة الجبال ، بعيدًا عن بلاد فوكاليا وكونسونانتيا ، تعيش النصوص العمياء. منفصلين يعيشون في كتاب علامات البستان مباشرة على ساحل علم الدلالات ، وهو محيط لغوي كبير.',
    signatures: 398333,
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

const signatures = ref(0)

const counterAnim = (count: Ref<number>, end: number, start = 0, duration = 2500) => {
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        count.value = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            requestAnimationFrame(step);
        }
    };

    requestAnimationFrame(step);
};

onMounted(() => {
    setTimeout(() => {
        counterAnim(signatures, petition.signatures)
    }, 2000)
})


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

            <div class="sm:hidden">
                <label for="tabs" class="sr-only">Select a tab</label>
                <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
                <select id="tabs" name="tabs"
                        v-model="tabs.selected"
                        class="block w-full ps-3 pe-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md">
                    <option v-for="tab in tabs.elements"
                            :key="tab.name"
                            :value="tab"
                            :selected="tab.name === tabs.selected.name">
                        {{ tab.name }}
                    </option>
                </select>
            </div>
            <div class="hidden sm:block">
                <div class="border-b border-gray-200">
                    <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                        <a v-for="tab in tabs.elements"
                           :key="tab.name"
                           href="#"
                           @click.prevent="tabs.selected = tab"
                           :class="[tab.name === tabs.selected.name ? 'border-red-500 text-red-600' : 'border-transparent text-gray-500 ' +
                            'hover:text-gray-700 hover:border-gray-200', 'whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm']"
                           :aria-current="tab.name === tabs.selected.name ? 'page' : undefined">
                            {{ tab.name }}
                            <span v-if="tab.count"
                                  class="hidden ms-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block"
                                  :class="[tab.name === tabs.selected.name ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-900']">{{
                                    tab.count
                                }}</span>
                        </a>
                    </nav>
                </div>
            </div>

            <template v-if="tabs.selected?.name === tabs.elements[0]?.name">
                <img class="rounded-lg w-full"
                     :src="petition.img"
                     alt="">
                <div class="text-gray-500 space-y-4">
                    <p> اللغات الأوروبية أعضاء في نفس العائلة. وجودهم المفصول هو اسطورة. بالنسبة للعلوم والموسيقى
                        والرياضة
                        وما إلى ذلك ، تستخدم أوروبا نفس المفردات. تختلف اللغات فقط في قواعدها ونطقها وكلماتها الأكثر
                        شيوعًا.</p>
                    <p> يدرك الجميع سبب الرغبة في إنشاء لغة مشتركة جديدة: يمكن للمرء أن يرفض دفع أتعاب المترجمين
                        الباهظين.
                        لتحقيق ذلك ، سيكون من الضروري أن يكون لديك قواعد موحدة ونطق وكلمات أكثر شيوعًا.</p>

                    <img class="rounded-lg w-full"
                         src="https://katen-template.netlify.app/html/images/posts/post-lg-2.jpg"
                         alt="">

                    <p>تختلف اللغات فقط في قواعدها ونطقها وكلماتها الأكثر شيوعًا. يدرك الجميع لماذا تكون لغة مشتركة
                        جديدة
                        مرغوبة.

                        ...
                        يمكن للمرء أن يرفض أن يدفع لمترجمين باهظي الثمن. لتحقيق ذلك ، سيكون من الضروري أن يكون لديك
                        قواعد
                        موحدة ونطق وكلمات أكثر شيوعًا.

                        إذا اجتمعت عدة لغات ، فإن قواعد اللغة الناتجة تكون أكثر بساطة وانتظامًا من اللغات الفردية. ستكون
                        اللغة المشتركة الجديدة أكثر بساطة وانتظامًا من اللغات الأوروبية الحالية. ستكون بسيطة مثل
                        أوكسيدنتال.
                        في الواقع ، ستكون شركة أوكسيدنتال.

                        انتشرت مجموعة من عينات النسيج على الطاولة - كان سامسا بائعًا متجولًا - وفوقها علق صورة كان قد
                        قطعها
                        مؤخرًا من مجلة مصورة ووضعها في إطار جميل مذهّب.

                        يجب أن أكون غير قادر على رسم ضربة واحدة
                        ماذا لو أنام قليلا
                        انتشرت مجموعة من عينات النسيج
                        العديد من رجليه ، نحيفة بشكل مثير للشفقة مقارنة بـ
                        استلقى على ظهره الذي يشبه الدروع
                        استيقظ جريجور سامسا من أحلام مضطربة
                        بالنسبة لشخص إنجليزي ، سيبدو الأمر وكأنه لغة إنجليزية مبسطة ، كما أخبرني أحد أصدقائي المتشككين
                        في
                        كامبريدج ما هي شركة أوكسيدنتال. اللغات الأوروبية أعضاء في نفس العائلة. وجودهم المفصول هو اسطورة.
                        بالنسبة للعلوم والموسيقى والرياضة وما إلى ذلك ، تستخدم أوروبا نفس المفردات.</p>
                </div>
            </template>

            <template v-if="tabs.selected?.name === tabs.elements[1]?.name">

            </template>
            <template v-if="tabs.selected?.name === tabs.elements[2]?.name"></template>
            <template v-if="tabs.selected?.name === tabs.elements[3]?.name"></template>
            <template v-if="tabs.selected?.name === tabs.elements[4]?.name"></template>

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
            <side-panel>
                <template v-slot:petition-details>
                    <div v-if="!signatures"
                         class="grow relative rounded-lg border border-gray-200 px-6 py-12 space-y-6">
                        <div class="text-lg h-4 mt-1 mb-2 animate-pulse rounded-full bg-gray-300"></div>

                        <div class="relative bg-gray-300 w-full h-4 rounded-full animate-pulse"></div>

                        <div class="flex flex-row">
                            <div class="w-9 shrink-0 h-9 rounded-full animate-pulse bg-gray-300"></div>
                            <div class="ms-2 grow space-y-3">
                                <div class="h-4 animate-pulse rounded-full bg-gray-300"></div>
                                <div class="h-4 animate-pulse rounded-full bg-gray-300"></div>
                                <div class="h-4 animate-pulse rounded-full bg-gray-300"></div>
                            </div>
                        </div>
                    </div>
                    <div v-else class="grow relative rounded-lg border border-gray-200 px-6 py-12 space-y-6">
                        <h3 class="text-lg"><span class="font-bold">{{ signatures }} وقعوا</span>. دعونا نصل إلى 500000!
                        </h3>

                        <div class="relative bg-gray-300 w-full h-4 rounded-full">
                            <div
                                :style="{width: `${signatures / 500000 * 100}%`}"
                                class="absolute start-0 inset-y-0 bg-gradient-to-l from-amber-300 to-red-500 h-4 rounded-full"
                            ></div>
                        </div>

                        <div class="flex flex-row">
                            <i class="ri-checkbox-circle-fill text-green-500 align-middle text-4xl"></i>
                            <div class="ms-2">
                                مع وجود 500000 توقيع ، تصبح هذه العريضة واحدة من أكثر العريضة موقعة على موقع <span
                                class="font-bold">تفيير.</span>
                            </div>
                        </div>
                    </div>

                    <div class="grow relative rounded-lg border border-gray-200 px-6 py-12 space-y-6">
                        <h3 class="text-lg font-bold">التوقيع على هذه العريضة</h3>
                        <p>
                            من خلال التوقيع ، أفوض حملة ارحمونا / 98670414 بتسليم المعلومات التي أقدمها في هذا النموذج
                            إلى أولئك
                            الذين لديهم سلطة في هذه المشكلة.
                        </p>

                        <form @submit.prevent class="grid grid-cols-2 gap-4">

                            <input type="text" class="col-span-2 border border-gray-200 rounded-lg focus:ring-red-500
                                    focus:border-red-500"
                                   placeholder="الاسم *">
                            <input type="text" class="col-span-2 border border-gray-200 rounded-lg focus:ring-red-500
                                    focus:border-red-500"
                                   placeholder="اللقب *">
                            <select class="col-span-2 ps-3 pe-10 border border-gray-200 rounded-lg focus:ring-red-500
                                    focus:border-red-500">
                                <option disabled selected>اختر الولاية *</option>
                            </select>
                            <select class="col-span-2 ps-3 pe-10 border border-gray-200 rounded-lg focus:ring-red-500
                                    focus:border-red-500">
                                <option disabled selected>اختر البلدية *</option>
                            </select>
                            <input type="email" class="col-span-2 border border-gray-200 rounded-lg focus:ring-red-500
                                    focus:border-red-500"
                                   placeholder="البريد الاكتروني *">
                            <textarea rows="4" class="col-span-2 border border-gray-200 rounded-lg focus:ring-red-500
                                    focus:border-red-500"
                                      placeholder="انا اوقع الانني ... ( اختياري )"></textarea>

                            <div class="col-span-2 relative flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="show" type="checkbox" checked
                                           class="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 rounded"/>
                                </div>
                                <div class="ms-3 text-sm">
                                    <label for="show" class="font-medium text-gray-700">أظهر توقيعي علنا على
                                        الإنترنت</label>
                                </div>
                            </div>
                            <div class="col-span-2 relative flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="comments" type="checkbox" checked
                                           class="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 rounded"/>
                                </div>
                                <div class="ms-3 text-sm">
                                    <label for="comments" class="font-medium text-gray-700">
                                        أرجو مراسلتي على البريد الإلكتروني حول أي جديد يخص هذه العريضة
                                    </label>
                                </div>
                            </div>
                            <div class="col-span-2 relative flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="comments" type="checkbox" checked
                                           class="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 rounded"/>
                                </div>
                                <div class="ms-3 text-sm">
                                    <label for="comments" class="font-medium text-gray-700">
                                        أبلغ من العمر 16 عاماً على الأقل، وأقبل
                                        <a href="#" class="text-red-500 hover:underline">سياسة الخصوصية</a>.
                                    </label>
                                </div>
                            </div>

                            <button type="submit" class="col-span-2 block py-2 rounded-lg text-white bg-red-500">
                                <i></i> التوقيع
                            </button>
                        </form>

                        <div>
                            <p> سوف تتلقى بريدًا إلكترونيًا يحتوي على رابط لتأكيد توقيعك. لضمان استلامك رسائلنا
                                الإلكترونية، يرجى إضافة info@aredaonline.com إلى دفتر عناوينك أو إلى قائمة العناوين
                                الموثوق بها.</p>
                            <br>
                            <p> يرجى ملاحظة أنه لا يمكنك تأكيد توقيعك بالرد على هذه الرسالة.</p>
                        </div>
                    </div>
                </template>
            </side-panel>
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
