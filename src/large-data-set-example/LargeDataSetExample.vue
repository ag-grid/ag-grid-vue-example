<template>
    <div style="width: 100vw; height: 90vh">
        <ag-grid-vue style="width: 100%; height: 100%;" class="ag-theme-material ag-material"
                     :gridOptions="gridOptions">
        </ag-grid-vue>
    </div>
</template>

<script>
    import CompletionPercentageRenderer from './CompletionPercentageRenderer'
    import {AgGridVue} from "ag-grid-vue";
    import {mapState} from 'vuex'
    export default {
        props: {
            setRowCount: {
                type: Function
            }
        },
        data() {
            return {
                text: null,
                rowCount: 100500,

            }
        },
        mounted(){
            this.updateRowCount(this.rowData.length)
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
                this.setRowCount(data.api.getModel().getRowCount())
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
                gridOptions.rowHeight = 33.5;
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
            'ag-grid-vue': AgGridVue,
            CompletionPercentageRenderer
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

.number-cell {
    text-align: right;
    padding-right:25px!important;
}
.object-cell {
    opacity: .5;
}
.empty-cell {
    opacity: .6;
}
.empty-cell:hover {
    background-color: #CCCCCC;
}
.word-cell, .boolean-cell, .time-cell{
    padding-left: 3px!important;
    text-align:left;
}
.ag-material .ag-row-odd {
    background-color: #f4f5f7;
}

.ag-icon-asc, .ag-icon-desc {
    background-size: 1.10rem 1.10rem;
    height: 1.05rem;
    width: 1.05rem;
}
.ag-floating-filter-input {
    background-color: #fff;
    border: 1px solid lightgrey;
}

.ag-material .ag-cell-not-inline-editing {
    padding: 5px 0;
}
.ag-header {
    height: 67px !important;
    min-height: 67px !important;
}
.ag-header-row {
    height: 36px !important;
    position: relative;
    top: 0 !important;
}
</style>
