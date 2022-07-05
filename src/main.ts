import { createApp } from 'vue'

import App from './App.vue'

import '@/config/styles'

import {router} from "./config/router"; 

import Loading from 'vue3-loading-overlay';

import Multiselect from '@vueform/multiselect'


const app = createApp(App);

app.component('loading',Loading) 
app.component('multiselect',Multiselect);

app.use(router)
.mount('#app')


