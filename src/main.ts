import { createApp } from 'vue'

import App from './App.vue'
import './index.css'

import {router} from "./config/router"; 

import "./assets/fonts/quicksand/css/quicksand.css";
import "./assets/fonts/montserrat/css/montserrat.css";


import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

const app = createApp(App);

app.component('loading',Loading) 


app.use(router)
.mount('#app')


