import { createApp } from 'vue'

import App from './App.vue'

import '@/config/styles'

import {router} from "./config/router"; 

import Loading from 'vue3-loading-overlay';

import Multiselect from '@vueform/multiselect'

import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'

import FontAwesomeIcon from "@/config/fontawesome-icons";

import Notifications from '@kyvg/vue3-notification'


const app = createApp(App);

app.use(PerfectScrollbar)
app.use(Notifications)
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('loading',Loading) 
app.component('multiselect',Multiselect);


app.use(router)
.mount('#app')


