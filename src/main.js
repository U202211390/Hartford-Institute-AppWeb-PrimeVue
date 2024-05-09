import { createApp } from 'vue'
import './style.css'
import App from './app.vue'
import PrimeVue from "primevue/config";

// Application Theme
import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';

import 'primeicons/primeicons.css'

import 'primeflex/primeflex.css'


import Button from "primevue/button";
import Toolbar from "primevue/toolbar";
import Card from "primevue/card";
import router from "./router/index.js";
import i18n from "./i18n.js";
import SelectButton from "primevue/selectbutton";



createApp(App)
    .use(router)
    .use(i18n)
    .use(PrimeVue, {ripple: true})
    .component('pv-button',Button)
    .component('pv-select-button',SelectButton)
    .component('pv-toolbar',Toolbar)
    .component('pv-card',Card)
    .mount('#app')
