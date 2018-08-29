import '@babel/polyfill'
import "../node_modules/ag-grid/dist/styles/ag-grid.css";
import "../node_modules/ag-grid/dist/styles/ag-theme-balham.css";
import "../node_modules/ag-grid/dist/styles/theme-material.css";

import "../node_modules/bootstrap/dist/css/bootstrap.css";


import Vue from "vue";
import './plugins/vuetify'
import VueRouter from "vue-router";
import App from './App.vue';
import routes from './routes';

// only needed if you use ag-grid enterprise features
import "ag-grid-enterprise";

import store from './store'
// import {LicenseManager} from "ag-grid-enterprise";
// LicenseManager.setLicenseKey("your license key");

Vue.use(VueRouter);

const router = new VueRouter({
    routes
});

new Vue({
    router,
    store,
    render: h => h(App),
    beforeMount(){
    	this.$store.dispatch('createRowDataIndications')
    }
}).$mount('#app');
