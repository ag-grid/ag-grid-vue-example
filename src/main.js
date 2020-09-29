import '../node_modules/@ag-grid-community/core/dist/styles/ag-grid.css';
import '../node_modules/@ag-grid-community/core/dist/styles/ag-theme-alpine.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import '@ag-grid-community/client-side-row-model';
import '@ag-grid-community/infinite-row-model';
import '@ag-grid-community/csv-export';

import {createApp} from 'vue';
import App from './App.vue';

// import "@ag-grid-community/client-side-row-model";

// only needed if you use ag-grid enterprise features
// import "ag-grid-enterprise";
// import {LicenseManager} from "ag-grid-enterprise";
// LicenseManager.setLicenseKey("your license key");

const app = createApp(App)
app.mount("#app")
// new Vue({
//     render: h => h(App)
// }).$mount('#app');
