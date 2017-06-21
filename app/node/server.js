/**
 * Created by alexrgb on 21.06.17.
 */

'use strict';

require("babel-core/register");
require("babel-polyfill");

import * as http  from 'http';
const Koa = require('koa');

const Router = require('koa-router');

const router = new Router();
const app = new Koa();

router.get('/', async(ctx) => {
    console.log( 'test' );

    ctx.body = JSON.stringify([
        {id: 'dummyTable', title: 'Dummy Table', order: 1, path: 'tabs/dummyTable.js'},
        {id: 'dummyChart', title: 'Dummy Chart', order: 2, path: 'tabs/dummyChart.js'},
        {id: 'dummyList', title: 'Dummy List', order: 0, path: 'tabs/dummyList.js'}
    ]);
});

app.use(router.routes());

http.createServer( app.callback() ).listen( process.env.APP_PORT );

console.info( `listening to ${process.env.APP_OUT_PORT} port` );