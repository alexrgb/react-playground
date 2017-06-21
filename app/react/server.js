/**
 * Created by alexrgb on 21.06.17.
 */

'use strict';

const http = require('http');
const path = require('path');
const Koa = require('koa');

const app = new Koa();
const staticServe = require('koa-static');

app.use(staticServe(path.join(__dirname, 'static')));

http.createServer( app.callback() ).listen( process.env.APP_PORT );

console.info( `listening to ${process.env.APP_OUT_PORT} port` );