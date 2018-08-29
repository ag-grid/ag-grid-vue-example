<template>
    <div style="width: 760px;">
        <h1>Large Data Set Component (100,500 rows, 95 Columns) ({{rowCount}} shown)</h1>
        <ag-grid-vue style="width: 100%; height: 350px;" class="ag-theme-balham"
                     :gridOptions="gridOptions">
        </ag-grid-vue>
    </div>
</template>

<script>
    import {AgGridVue} from "ag-grid-vue";
    import {mapState} from 'vuex'
    export default {
        data() {
            return {
                text: null,
                rowCount: 100500,

            }
        },
        methods: {
            onModelUpdated(data) {
                console.log('rows to display ', data.api.getModel().rowsToDisplay)
                console.log('keep rendered rows ', data.keepRenderedRows)
                console.log('data.newData ', data.newData)
                // data.keepRenderedRows = false
            },
            onFilterChanged(data) {
            // let rowsToDisplay = data.api.rowModel.rowsToDisplay
            // data.api.getRenderedNodes()  
            // data.api.redrawRows({rowNodes: rowsToDisplay})
            this.updateRowCount(data.api.getModel().getRowCount())
            // data.api.refreshClientSideRowModel() 
        // 
            },
            updateRowCount(param){
                this.rowCount = param
            }
        },
        computed: {
            rowData(){
                return this.$store.state.rowData
            },
            columnDefs(){
                return this.$store.state.columnDefs
            },
            gridOptions: function () {
                let gridOptions = {};
                gridOptions.rowData = this.rowData;
                gridOptions.rowModelType = 'clientSide';
                gridOptions.floatingFilter = true;
                gridOptions.defaultColDef = {
                    filter: 'agTextColumnFilter',
                    filterParams: {
                        nullComparator: false,
                        newRowsAction: 'keep',
                        debounceMs: 1000
                    },
                    suppressMenu: true,
                },
                gridOptions.showToolPanel = false;
                gridOptions.toolPanelSuppressPivotMode = true;
                gridOptions.toolPanelSuppressValues = true;
                gridOptions.toolPanelSuppressRowGroups = true
                gridOptions.toolPanelSuppressSideButtons = true;
                gridOptions.suppressScrollOnNewData = true;
                gridOptions.onFilterChanged = this.onFilterChanged;
                gridOptions.columnDefs = this.columnDefs;
                gridOptions.enableSorting = true;
                gridOptions.infiniteInitialRowCount = true;
                gridOptions.deltaRowDataMode = true; 
                gridOptions.onModelUpdated = this.onModelUpdated

                return gridOptions
            }
        },
        components: {
            'ag-grid-vue': AgGridVue
        },
        created() {
            // data created here so outside of vue (ie no reactive, not observed)
            // also frozen (prob unnecessarily)
            // this.rowData = [];
            // for (let i = 0; i < 100500; i++) {
            //     this.rowData.push(Object.freeze({
            //         recordNumber: i,
            //         value1: Math.floor(Math.random() * 10000),
            //         value2: Math.floor(Math.random() * 10000),
            //         value3: Math.floor(Math.random() * 10000),
            //         value4: Math.floor(Math.random() * 10000),
            //         value5: Math.floor(Math.random() * 10000),
            //         value6: Math.floor(Math.random() * 10000),
            //         value7: Math.floor(Math.random() * 10000)
            //     }));
            // }
            // this.rowData = Object.freeze(this.rowData);

            // this.columnDefs = Object.freeze(
            // )
        }
    }
</script>

<style>
</style>
