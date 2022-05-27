import { createApp } from 'vue'

import App from './App.vue'

import '@/config/styles'

import {router} from "./config/router"; 

import Loading from 'vue3-loading-overlay';

const app = createApp(App);

app.component('loading',Loading) 

app.use(router)
.mount('#app')


