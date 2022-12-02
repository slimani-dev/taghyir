import {createSSRApp, h} from 'vue'
import {renderToString} from '@vue/server-renderer'
import {createInertiaApp} from '@inertiajs/inertia-vue3'
import createServer from '@inertiajs/server'
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers'
import {ZiggyVue} from '../../vendor/tightenco/ziggy/dist/vue.m'
import route, {RouteParam, RouteParamsWithQueryOverload} from 'ziggy-js'

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

            VueApp.use(ZiggyVue, Ziggy).use(plugin);

            VueApp.config.globalProperties.$route = (
                name?: undefined,
                params?: RouteParamsWithQueryOverload | RouteParam,
                absolute?: boolean
            ) => {
                route(name, params, absolute, Ziggy)
            }

            return VueApp
        }
    })
)
