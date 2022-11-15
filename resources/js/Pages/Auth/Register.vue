<script setup lang="ts">
import InputError from '@/Components/starter-kit/InputError.vue'
import InputLabel from '@/Components/starter-kit/InputLabel.vue'
import PrimaryButton from '@/Components/starter-kit/PrimaryButton.vue'
import TextInput from '@/Components/starter-kit/TextInput.vue'
import {Head, Link, useForm} from '@inertiajs/inertia-vue3'
import SidePanel from '@/Components/SidePanel.vue'
import MainLayout from '@/Layouts/MainLayout.vue'

const props = defineProps<{
    states: { id: Number, name: String, ar_name: String }[]
}>()

const form = useForm({
    name: '',
    email: '',
    state_id: 0,
    city: '',
    password: '',
    password_confirmation: '',
    terms: false
})

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation')
    })
}
</script>

<template>
    <main-layout>
        <Head>
            <title>انشاء حساب</title>
        </Head>

        <form @submit.prevent="submit" class="grid grid-cols-2 gap-4 gap-y-6">
            <div>
                <input type="text"
                       class="border w-full border-gray-200 rounded-lg focus:ring-red-500 focus:border-red-500"
                       v-model="form.name" required autofocus
                       autocomplete="name"
                       placeholder="الاسم الكامل *">
                <InputError class="mt-2" :message="form.errors.name"/>
            </div>

            <div>
                <input type="email"
                       class="border w-full border-gray-200 rounded-lg focus:ring-red-500 focus:border-red-500"
                       v-model="form.email" required
                       autocomplete="email"
                       placeholder="البريد الاكتروني *">
                <InputError class="mt-2" :message="form.errors.email"/>
            </div>

            <div>
                <select v-model="form.state_id"
                        class="ps-3 w-full pe-10 border border-gray-200 rounded-lg focus:ring-red-500
                                    focus:border-red-500">
                    <option disabled selected value="0">اختر الولاية *</option>
                    <option v-for="state in states"
                            :value="state.id"
                            v-text="`${state.id} - ${state.ar_name}`"/>
                </select>
                <InputError class="mt-2" :message="form.errors.state_id"/>
            </div>

            <div>
                <input type="text"
                       class="border w-full border-gray-200 rounded-lg focus:ring-red-500 focus:border-red-500"
                       v-model="form.city" required autofocus
                       autocomplete="city"
                       placeholder="المدينة *">
                <InputError class="mt-2" :message="form.errors.city"/>
            </div>

            <div>
                <input type="password"
                       class="border w-full border-gray-200 rounded-lg focus:ring-red-500 focus:border-red-500"
                       v-model="form.password" required
                       placeholder="كلمة السر *">
                <InputError class="mt-2" :message="form.errors.password"/>
            </div>

            <div>
                <input type="password"
                       class="border w-full border-gray-200 rounded-lg focus:ring-red-500 focus:border-red-500"
                       v-model="form.password_confirmation" required
                       placeholder="تاكيد كلمة السر *">
                <InputError class="mt-2" :message="form.errors.password_confirmation"/>
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

            <div class="col-span-2">
                <button type="submit"
                        class="me-4 py-2 rounded-lg text-white bg-red-500 px-4"
                        :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing">
                    انساء حساب
                </button>
            </div>

            <p class="text-sm text-gray-600 ">
                هل لديك حساب؟
                <Link :href="route('login')" class="font-bold text-red-500 hover:underline ms-2">
                    تسجيل الدخول
                </Link>
            </p>
        </form>

        <template v-slot:sidebar>
            <side-panel></side-panel>
        </template>
    </main-layout>
</template>
