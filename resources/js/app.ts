import '@/bootstrap'
import '@/../css/app.scss'
import 'remixicon/fonts/remixicon.css'

import {createApp, h} from 'vue'
import {createInertiaApp} from '@inertiajs/inertia-vue3'
import {InertiaProgress} from '@inertiajs/progress'
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers'
import {ZiggyVue} from '../../vendor/tightenco/ziggy/dist/vue.m'
import {Ziggy} from './ziggy'
import route from "ziggy-js"

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel'

createInertiaApp({
    title: (title: string) => `${title} - ${appName}`,
    // @ts-ignore
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    // @ts-ignore
    setup({el, app, props, plugin}) {
        const VueApp = createApp({render: () => h(app, props)});
        VueApp.config.globalProperties.$route = route

        VueApp.use(plugin).use(ZiggyVue, Ziggy).mount(el)
        return VueApp
    }
}).then((r: any) => {
})

InertiaProgress.init({color: '#ff0000'})
