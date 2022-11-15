<script setup>
import { Link } from '@inertiajs/inertia-vue3'
import { onMounted, onUnmounted, ref } from 'vue'
import { debounce } from 'lodash'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

const showSideMenu = ref(false)

const fixedMenu = ref(false)

const handleScroll = (event) => {
    fixedMenu.value = window.scrollY > 500
}

const handleDebouncedScroll = debounce(handleScroll, 10)

onMounted(() => {
    window.addEventListener('scroll', handleDebouncedScroll)
})
onUnmounted(() => {
    window.removeEventListener('scroll', handleDebouncedScroll)
})

</script>

<template>
    <div
        class="hidden sm:flex sm:flex-row border-b border-b-gray-200 px-4 py-1 max-w-6xl mx-auto justify-between">
        <div></div>
        <div class="hidden sm:flex sm:flex-row ">
            <a href="#" class="me-4"><i class="ri-facebook-fill"></i></a>
            <a href="#" class="me-4"><i class="ri-twitter-fill"></i></a>
            <a href="#" class="me-4"><i class="ri-instagram-line"></i></a>
            <a href="#" class=""><i class="ri-youtube-fill"></i></a>
        </div>
    </div>

    <div class="sticky top-0 inset-x-0 z-10 bg-white shadow-lg">
        <div class="flex flex-row border-b border-b-gray-200 px-4 h-24 items-center justify-between max-w-6xl mx-auto">
            <div class="py-8 me-8">
                <Link class="font-black text-3xl"
                      :href="route('home')">
                    التغيير
                    <span class="text-red-500">.</span>
                </Link>
            </div>

            <ul class="grow font-semibold list-none hidden sm:block">
                <li class="float-start py-8">
                    <a href="#"
                       class="block transition ease-in-out duration-200 px-4 relative hover:text-red-500
                   after:w-0 after:h-0.5 after:absolute after:bg-red-500
                   after:-bottom-2.5 after:start-4 after:ease-in-out after:transition-width after:duration-200
                   hover:after:w-6">
                        ابدأ عريضة
                    </a>
                </li>
                <li class="float-start py-8">
                    <a href="#"
                       class="block transition ease-in-out duration-200 px-4 relative hover:text-red-500
                   after:w-0 after:h-0.5 after:absolute after:bg-red-500
                   after:-bottom-2.5 after:start-4 after:ease-in-out after:transition-width after:duration-200
                   hover:after:w-6">
                        احدث العرائض
                    </a>
                </li>
            </ul>

            <ul class="font-semibold list-none hidden sm:block">
                <Menu v-if="$page.props.auth.user"
                      as="li" class="float-start relative">
                    <MenuButton
                        class="block transition ease-in-out duration-200 px-4 relative hover:text-red-500
                          after:w-0 after:h-0.5 after:absolute after:bg-red-500
                          after:-bottom-2.5 after:start-4 after:ease-in-out after:transition-width after:duration-200
                          hover:after:w-6">
                        {{ $page.props.auth.user.name }}
                        <i class="ri-arrow-down-s-line -mr-1 ml-2 h-5 w-5" aria-hidden="true"/>
                    </MenuButton>


                    <transition enter-active-class="transition ease-out duration-100"
                                enter-from-class="transform opacity-0 scale-95"
                                enter-to-class="transform opacity-100 scale-100"
                                leave-active-class="transition ease-in duration-75"
                                leave-from-class="transform opacity-100 scale-100"
                                leave-to-class="transform opacity-0 scale-95">
                        <MenuItems
                            class="z-10 origin-top-end end-0 absolute mt-10 w-48 shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div class="py-1">
                                <MenuItem>
                                    <a href="#"
                                       class="block transition ease-in-out duration-200 px-4 relative hover:text-red-500
                                      after:w-0 after:h-0.5 after:absolute after:bg-red-500
                                      after:-bottom-0 after:start-4 after:ease-in-out after:transition-width after:duration-200
                                      hover:after:w-6 py-4">العرائض الخاصة بي</a>
                                </MenuItem>
                                <MenuItem>
                                    <a href="#"
                                       class="block transition ease-in-out duration-200 px-4 relative hover:text-red-500
                                      after:w-0 after:h-0.5 after:absolute after:bg-red-500
                                      after:-bottom-0 after:start-4 after:ease-in-out after:transition-width after:duration-200
                                      hover:after:w-6 py-4">توقيعاتي</a>
                                </MenuItem>
                                <MenuItem>
                                    <a href="#"
                                       class="block transition ease-in-out duration-200 px-4 relative hover:text-red-500
                                      after:w-0 after:h-0.5 after:absolute after:bg-red-500
                                      after:-bottom-0 after:start-4 after:ease-in-out after:transition-width after:duration-200
                                      hover:after:w-6 py-4">License</a>
                                </MenuItem>
                                <Link
                                    :href="route('logout')" method="post" as="button"
                                    class="block transition ease-in-out duration-200 px-4 relative hover:text-red-500
                                after:w-0 after:h-0.5 after:absolute after:bg-red-500
                                after:-bottom-0 after:start-4 after:ease-in-out after:transition-width after:duration-200
                                hover:after:w-6 py-4">
                                    تسجيل الخوج
                                </Link>
                            </div>
                        </MenuItems>
                    </transition>
                </Menu>

                <template v-else>
                    <li class="float-start py-8">
                        <Link :href="route('login')"
                              class="block transition ease-in-out duration-200 px-4 relative hover:text-red-500
                          after:w-0 after:h-0.5 after:absolute after:bg-red-500
                          after:-bottom-2.5 after:start-4 after:ease-in-out after:transition-width after:duration-200
                          hover:after:w-6">
                            تسجيل الدخول
                        </Link>
                    </li>
                    <li class="float-start py-8">
                        <Link :href="route('register')"
                              class="block transition ease-in-out duration-200 px-4 relative hover:text-red-500
                          after:w-0 after:h-0.5 after:absolute after:bg-red-500
                          after:-bottom-2.5 after:start-4 after:ease-in-out after:transition-width after:duration-200
                          hover:after:w-6">
                            انشئ حساب
                        </Link>
                    </li>
                </template>
            </ul>

            <div class="sm:hidden" @click="showSideMenu = true">
                <i class="ri-menu-2-line ri-xl"></i>
            </div>
        </div>
    </div>

    <transition enter-active-class="transition duration-300"
                enter-from-class="opacity-0"
                enter-to-class="opacity-100"
                leave-active-class="transition duration-300"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0">
        <div v-if="showSideMenu" @click="showSideMenu = false"
             class="fixed inset-0 z-30 bg-gray-400 bg-opacity-25"></div>
    </transition>

    <transition enter-active-class="transition duration-300"
                enter-from-class="-translate-x-full"
                enter-to-class="translate-x-0"
                leave-active-class="transition duration-300"
                leave-from-class="translate-x-0"
                leave-to-class="-translate-x-full">
        <div v-if="showSideMenu" class="fixed inset-y-0 z-40 p-4 py-8 end-0 w-72 bg-white flex flex-col">
            <div class="sm:hidden flex justify-end" @click="showSideMenu = false">
                <i class="ri-close-line ri-xl"></i>
            </div>
            <div class="grow flex flex-col justify-between p-4">
                <div>
                    <h3 class="font-black text-xl">التغيير <span class="text-red-500">.</span></h3>
                </div>
                <div class="flex flex-row ">
                    <a href="#" class="me-4"><i class="ri-facebook-fill"></i></a>
                    <a href="#" class="me-4"><i class="ri-twitter-fill"></i></a>
                    <a href="#" class="me-4"><i class="ri-instagram-line"></i></a>
                    <a href="#" class=""><i class="ri-youtube-fill"></i></a>
                </div>
            </div>
        </div>
    </transition>

</template>

<script>
export default {
    name: 'NabBar'
}
</script>

<style scoped>

</style>
