import "../node_modules/ag-grid/dist/styles/ag-grid.css";
import "../node_modules/ag-grid/dist/styles/ag-theme-balham.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
// only needed if you use ag-grid enterprise features
import "ag-grid-enterprise";
import Vue from "vue";
import VueRouter from "vue-router";
import App from './App.vue';
import routes from './routes';
// import {LicenseManager} from "ag-grid-enterprise/main";
// LicenseManager.setLicenseKey("your license key");

Vue.use(VueRouter);

const router = new VueRouter({
    routes
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
