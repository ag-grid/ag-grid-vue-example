<template>
    <div style="width: 100%;">
        <h1>Large Data Set Component (50,000 rows)</h1>
        <ag-grid-vue style="width: 100%; height: 650px;" class="ag-theme-alpine"
                     :rowData="rowData"
                     :columnDefs="columnDefs"
                     :modules="modules"
                     @grid-ready="onReady">
        </ag-grid-vue>
    </div>
</template>

<script>
import {AgGridVue} from "@ag-grid-community/vue";

import {ClientSideRowModelModule} from "@ag-grid-community/client-side-row-model";
import {ColumnsToolPanelModule} from "@ag-grid-enterprise/column-tool-panel";
import {ExcelExportModule} from "@ag-grid-enterprise/excel-export";
import {FiltersToolPanelModule} from "@ag-grid-enterprise/filter-tool-panel";
import {SparklinesModule} from "@ag-grid-enterprise/sparklines";
import {GridChartsModule} from "@ag-grid-enterprise/charts";
import {MasterDetailModule} from "@ag-grid-enterprise/master-detail";
import {MenuModule} from "@ag-grid-enterprise/menu";
import {MultiFilterModule} from "@ag-grid-enterprise/multi-filter";
import {RangeSelectionModule} from "@ag-grid-enterprise/range-selection";
import {RichSelectModule} from "@ag-grid-enterprise/rich-select";
import {RowGroupingModule} from "@ag-grid-enterprise/row-grouping";
import {ServerSideRowModelModule} from "@ag-grid-enterprise/server-side-row-model";
import {SetFilterModule} from "@ag-grid-enterprise/set-filter";
import {SideBarModule} from "@ag-grid-enterprise/side-bar";
import {StatusBarModule} from "@ag-grid-enterprise/status-bar";
import {ViewportRowModelModule} from "@ag-grid-enterprise/viewport-row-model";
import {ClipboardModule} from "@ag-grid-enterprise/clipboard";

export default {
    name: "LargeDataSetExample",
    data() {
        return {
            rowData: this.rowData,
            columnDefs: this.columnDefs,
            modules: [
                ClientSideRowModelModule,
                ColumnsToolPanelModule,
                ExcelExportModule,
                FiltersToolPanelModule,
                SparklinesModule,
                GridChartsModule,
                MasterDetailModule,
                MenuModule,
                MultiFilterModule,
                RangeSelectionModule,
                RichSelectModule,
                RowGroupingModule,
                ServerSideRowModelModule,
                SetFilterModule,
                SideBarModule,
                StatusBarModule,
                ViewportRowModelModule,
                ClipboardModule
            ]
        }
    },
    components: {
        'ag-grid-vue': AgGridVue
    },
    created() {
        // data created here so outside of vue (ie no reactive, not observed)
        // also frozen (prob unnecessarily)
        this.rowData = [];
        for (let i = 0; i < 50000; i++) {
            this.rowData.push(Object.freeze({
                recordNumber: i,
                value1: Math.floor(Math.random() * 10000),
                value2: Math.floor(Math.random() * 10000),
                value3: Math.floor(Math.random() * 10000),
                value4: Math.floor(Math.random() * 10000),
                value5: Math.floor(Math.random() * 10000),
                value6: Math.floor(Math.random() * 10000),
                value7: Math.floor(Math.random() * 10000)
            }));
        }
        this.rowData = Object.freeze(this.rowData);

        this.columnDefs = Object.freeze([
            {headerName: 'Record', field: 'recordNumber'},
            {headerName: 'Value 1', field: 'value1'},
            {headerName: 'Value 2', field: 'value2'},
            {headerName: 'Value 3', field: 'value3'},
            {headerName: 'Value 4', field: 'value4'},
            {headerName: 'Value 5', field: 'value4'},
            {headerName: 'Value 6', field: 'value4'},
            {headerName: 'Value 7', field: 'value4'}
        ])
    },
    methods: {
        onReady(params) {
            params.api.sizeColumnsToFit();
        }
    }
}
</script>

<style>
</style>
