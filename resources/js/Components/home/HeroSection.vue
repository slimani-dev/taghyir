<script setup>
import dzBg from '@/../assets/img/algeria-bg.svg'

</script>

<template>
  <div class="relative mb-8">
    <div class="absolute p-6 inset-0 min-h-[400px] pt-2 -z-10 opacity-25">
      <img :src="dzBg" alt="" class="w-full h-full object-contain">
    </div>

    <div class="max-w-6xl mx-auto px-12 py-16 text-center space-y-8">
      <h1 class="text-center text-3xl sm:text-5xl md:text-7xl font-bold">منصة التغير الاولى في الجزائر</h1>
      <h3 class="text-center text-xl sm:text-3xl font-bold text-gray-600">
        <span class="text-red-500 text-2xl sm:text-5xl">497،034،119</span> شخصًا يعبرون عن اصواتهم كل يوم.
      </h3>

      <div class="flex flex-row justify-center items-center pt-8">
        <h3 class="me-4 sm:me-8 text-center text-xl sm:text-5xl font-bold">عبر عن رايك</h3>
        <a href="#"
           class="inline-block bg-red-500 hover:bg-red-600 text-white rounded-xl shadow-md  py-4 px-8 sm:text-3xl font-bold">
          ابدأ عريضة
        </a>
      </div>

      <div class="sm:pt-4 inline-block sm:text-2xl font-bold">
        <ul class="list-decimal list-inside space-y-4">
          <li class="hover:text-red-500 cursor-pointer">إنشيء عريضة جديدة و عبر عن رايك</li>
          <li class="hover:text-red-500 cursor-pointer"> اجمع توقيعات</li>
          <li class="hover:text-red-500 cursor-pointer"> قم بخلق مجتمع نشط حول موضوع عريضتك</li>
          <li class="hover:text-red-500 cursor-pointer"> قم بتقديم عريضتك إلى صناع القرار</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'hero-section'
}
</script>
