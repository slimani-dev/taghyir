import '@/bootstrap'
import '@/../css/app.css'
import 'remixicon/fonts/remixicon.css'

import {createApp, h} from 'vue'
import {createInertiaApp} from '@inertiajs/inertia-vue3'
import {InertiaProgress} from '@inertiajs/progress'
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers'
// @ts-ignore
import {ZiggyVue} from '../../vendor/tightenco/ziggy/dist/vue.m'
// @ts-ignore
import {Ziggy} from './ziggy'

document.documentElement.dir = 'rtl'
document.documentElement.lang = 'ar-DZ'

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel'

// @ts-ignore
const pages = import.meta.glob('./Pages/**/*.vue')


createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, pages),
    // @ts-ignore
    setup({el, app, props, plugin}) {
        return createApp({render: () => h(app, props)})
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .mount(el)
    }
}).then(r => {
})

InertiaProgress.init({color: '#4B5563'})
