import Vue from "vue";
import VueRouter from "vue-router";
import "../node_modules/ag-grid/dist/styles/ag-grid.css";
import "../node_modules/ag-grid/dist/styles/theme-fresh.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

// only needed if you use ag-grid enterprise features
import "ag-grid-enterprise/main";

// only needed if you use ag-grid enterprise features
// import {LicenseManager} from "ag-grid-enterprise/main";
// LicenseManager.setLicenseKey("your license key");

import DynamicComponentExample from "./dynamic-component-example/DynamicComponentExample.vue";
import FloatingRowExample from "./floating-row-example/FloatingRowExample.vue";
import FullWidthRowExample from "./full-width-example/FullWidthExample.vue";
import GroupedRowExample from "./grouped-row-example/GroupedRowExample.vue";
import LargeDataSetExample from "./large-data-set-example/LargeDataSetExample.vue";

Vue.use(VueRouter);

const routes = [
    {path: '/', component: DynamicComponentExample, name: "Rich Grid with Pure JavaScript"},
    {path: '/floating', component: FloatingRowExample, name: "Pinned Row Example"},
    {path: '/full-width', component: FullWidthRowExample, name: "Full Width Row Example"},
    {path: '/grouped-row', component: GroupedRowExample, name: "Grouped Row Example"},
    {path: '/large-data', component: LargeDataSetExample, name: "Large Data Example"}
];

const router = new VueRouter({
    routes
});

const app = new Vue({
    data: {
        routes
    },
    router
}).$mount('#app');

