import {PageProps as ExtendedPropsInterface} from "@inertiajs/inertia";
import {User} from "@/types/User";
import route from "ziggy-js";

declare module '@inertiajs/inertia' {
    export interface PageProps extends ExtendedPropsInterface {
        auth: {
            user: User
        }
    }
}


declare module 'vue' {
    interface ComponentCustomProperties {
        $route: typeof route,
    }
}

/*
import route from "ziggy-js";
import {Page} from "@inertiajs/inertia";
import {User} from "@/types/User";


interface propsInterface extends Page {
    props: {
        auth: {
            user: User
        }
    }
}

declare module 'vue' {
    interface ComponentCustomProperties {
        $route: typeof route,
        $page: propsInterface
    }
}


declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        $page: propsInterface
    }
}
*/
