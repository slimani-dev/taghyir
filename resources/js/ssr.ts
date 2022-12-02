import {createSSRApp, h} from 'vue'
import {renderToString} from '@vue/server-renderer'
import {createInertiaApp} from '@inertiajs/inertia-vue3'
import createServer from '@inertiajs/server'
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers'
import {ZiggyVue} from '../../vendor/tightenco/ziggy/dist/vue.m'
import route from '../../vendor/tightenco/ziggy/src/js'

const appName = 'Laravel'

createServer((page) =>
    createInertiaApp({
        page,
        render: renderToString,
        title: (title) => `${title} - ${appName}`,
        // @ts-ignore
        resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
        setup({app, props, plugin}) {
            const Ziggy = {
                // @ts-ignore
                ...props.initialPage.props.ziggy,
                // @ts-ignore
                location: new URL(props.initialPage.props.ziggy.url)
            }

            const VueApp = createSSRApp({render: () => h(app, props)})

            VueApp.config.globalProperties.$route = route
            VueApp.use(ZiggyVue, Ziggy).use(plugin);

            console.log('route(\'home\')', route('home').toString())

            return VueApp
        }
    })
)
