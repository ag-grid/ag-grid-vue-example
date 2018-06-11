<template>
    <div style="width: 760px;">
        <ag-grid-vue style="width: 100%; height: 350px;" class="ag-theme-balham"
                     :gridOptions="gridOptions">
        </ag-grid-vue>
    </div>
</template>

<script>
    import {AgGridVue} from "ag-grid-vue";
    import StyledRendererComponent from './StyledRendererComponent.vue'

    export default {
        data() {
            return {
                gridOptions: null
            }
        },
        components: {
            'ag-grid-vue': AgGridVue
        },
        methods: {
            createRowData() {
                let rowData = [];

                for (let i = 0; i < 15; i++) {
                    rowData.push({
                        row: "Row " + i,
                        number: Math.round(Math.random() * 100)
                    });
                }

                return rowData;
            },
            createColumnDefs() {
                return [
                    {
                        headerName: "Row",
                        field: "row",
                        width: 450,
                        pinnedRowCellRendererFramework: StyledRendererComponent,
                        pinnedRowCellRendererParams: {
                            style: {'font-weight': 'bold'}
                        }
                    },
                    {
                        headerName: "Number",
                        field: "number",
                        width: 430,
                        pinnedRowCellRendererFramework: StyledRendererComponent,
                        pinnedRowCellRendererParams: {
                            style: {'font-style': 'italic'}
                        }
                    },
                ];
            }
        },
        beforeMount() {
            this.gridOptions = {};
            this.gridOptions.rowData = this.createRowData();
            this.gridOptions.columnDefs = this.createColumnDefs();
            this.gridOptions.pinnedTopRowData = [
                {row: "Top Row", number: "Top Number"}
            ];
            this.gridOptions.pinnedBottomRowData = [
                {row: "Bottom Row", number: "Bottom Number"}
            ];
        }
    }
</script>

<style>
</style>
