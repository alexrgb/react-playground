/**
 * Created by alexrgb on 21.06.17.
 */

'use strict';

import {MainLayout} from "../components/layouts/main";

function errorLoading(err) {
    console.error('Dynamic page loading failed', err);
}


function loadRoute(cb) {
    return (module) => cb(null, module.default);
}


export default {
    component: MainLayout,
    childRoutes: [
        {
            path: '/',
            getComponent(location, cb) {
                System.import('../components/partials/' + location).then(loadRoute(cb)).catch(errorLoading);
            }
        },
        {
            path: 'chart',
            getComponent(location, cb) {
                System.import('../components/partials/' + location).then(loadRoute(cb)).catch(errorLoading);
            }
        },
        {
            path: 'list',
            getComponent(location, cb) {
                System.import('../components/partials/' + location).then(loadRoute(cb)).catch(errorLoading);
            }
        },
    ]
};