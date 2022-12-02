<script setup>
import NabBar from '@/Components/nav/NabBar.vue'
import { Link } from '@inertiajs/inertia-vue3'


</script>

<template>
    <nab-bar/>

    <slot name="hero"></slot>

    <slot name="highlights"/>

    <div class="lg:flex lg:flex-row-reverse pt-8 max-w-6xl mx-auto md:px-6 lg:px-0">
        <div class="lg:w-2/3 px-4">
            <slot/>
        </div>
        <div class="lg:w-1/3 px-4 my-8 lg:my-0">
            <div class="space-y-8 sticky top-28">
                <div class="grow relative rounded-lg border border-gray-200 p-6  text-center space-y-6">
                    <div class="text-start">
                        <Link :href="$route('dashboard')"
                              class="block transition ease-in-out duration-200 px-4 relative hover:text-red-500
                                after:w-0 after:h-0.5 after:absolute after:bg-red-500
                                after:-bottom-0 after:start-4 after:ease-in-out after:transition-width after:duration-200
                                hover:after:w-6 py-4">العرائض الخاصة بي
                        </Link>
                        <a href="#"
                           class="block transition ease-in-out duration-200 px-4 relative hover:text-red-500
                                after:w-0 after:h-0.5 after:absolute after:bg-red-500
                                after:-bottom-0 after:start-4 after:ease-in-out after:transition-width after:duration-200
                                hover:after:w-6 py-4">توقيعاتي</a>

                        <a href="#"
                           class="block transition ease-in-out duration-200 px-4 relative hover:text-red-500
                                after:w-0 after:h-0.5 after:absolute after:bg-red-500
                                after:-bottom-0 after:start-4 after:ease-in-out after:transition-width after:duration-200
                                hover:after:w-6 py-4">حسابي</a>

                        <Link
                            :href="$route('logout')" method="post" as="button"
                            class="block transition ease-in-out duration-200 px-4 relative hover:text-red-500
                                after:w-0 after:h-0.5 after:absolute after:bg-red-500
                                after:-bottom-0 after:start-4 after:ease-in-out after:transition-width after:duration-200
                                hover:after:w-6 py-4">
                            تسجيل الخوج
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>


<script>
export default {
    name: 'AuthenticatedLayout'
}
</script>

<style scoped>

</style>
