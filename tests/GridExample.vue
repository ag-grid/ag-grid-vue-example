<template>
    <ag-grid-vue style="width: 500px; height: 500px;"
                 class="ag-theme-balham"
                 @grid-ready="onGridReady"
                 :columnDefs="columnDefs"
                 :rowData="rowData"
                 :modules="modules">
    </ag-grid-vue>
</template>

<script>
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
import {AgGridVue} from "@ag-grid-community/vue";
import Renderer from './Renderer.vue';
import Editor from './Editor.vue';

export default {
    name: 'App',
    data() {
        return {
            columnDefs: null,
            rowData: null,
            api: null,
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
        AgGridVue,
        Renderer,
        Editor
    },
    beforeMount() {
        this.columnDefs = [
            {field: 'make'},
            {
                field: 'price',
                editable: true,
                cellRenderer: 'Renderer',
                cellEditor: 'Editor'
            }
        ];

        this.rowData = [
            {make: 'Toyota', price: '35000'},
        ];
    },
    methods: {
        onGridReady(params) {
            this.api = params.api;
        }
    }
}
</script>

<style scoped>
</style>


