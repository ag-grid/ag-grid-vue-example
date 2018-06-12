<template>
    <div style="width: 760px;">
        <ag-grid-vue style="width: 100%; height: 350px;" class="ag-theme-balham"
                     :gridOptions="gridOptions"
                     :columnDefs="columnDefs"
                     :rowData="rowData">
        </ag-grid-vue>
    </div>
</template>

<script>
    import Vue from "vue";
    import {AgGridVue} from "ag-grid-vue";
    import ParamsComponent from './ParamsComponent.vue'
    import ChildMessageComponent from './ChildMessageComponent.vue'
    import CurrencyComponent from './CurrencyComponent.vue'

    let SquareComponent = Vue.extend({
        render: function (h) {
            return h('span', this.valueSquared())
        },
        methods: {
            valueSquared() {
                return this.params.value * this.params.value;
            }
        }
    });

    export default {
        data() {
            return {
                gridOptions: null,
                columnDefs: null,
                rowData: null
            }
        },
        components: {
            'ag-grid-vue': AgGridVue,
            'CubeComponent': {
                render: function (h) {
                    return h('span', this.valueCubed())
                },
                methods: {
                    valueCubed() {
                        return this.params.value * this.params.value * this.params.value;
                    }
                }
            },
            ParamsComponent,
            ChildMessageComponent
        },
        methods: {
            createRowData() {
                const rowData = [];

                for (let i = 0; i < 15; i++) {
                    rowData.push({
                        row: "Row " + i,
                        value: i,
                        currency: i + Number(Math.random().toFixed(2))
                    });
                }

                this.rowData = rowData;
            },
            createColumnDefs() {
                this.columnDefs = [
                    {headerName: "Row", field: "row", width: 100},
                    {
                        headerName: "Square",
                        field: "value",
                        cellRendererFramework: SquareComponent,
                        editable: true,
                        colId: "square",
                        width: 100
                    },
                    {
                        headerName: "Cube",
                        field: "value",
                        cellRendererFramework: 'CubeComponent',
                        colId: "cube",
                        width: 100
                    },
                    {
                        headerName: "Row Params",
                        field: "row",
                        cellRendererFramework: 'ParamsComponent',
                        colId: "params",
                        width: 215
                    },
                    {
                        headerName: "Currency (Filter)",
                        field: "currency",
                        cellRendererFramework: CurrencyComponent,
                        colId: "params",
                        width: 135
                    },
                    {
                        headerName: "Child/Parent",
                        field: "value",
                        cellRendererFramework: 'ChildMessageComponent',
                        colId: "params",
                        width: 120
                    }
                ];
            },
            methodFromParent(cell) {
                alert(`"Parent Component Method from ${cell}!`);
            }
        },
        beforeMount() {
            this.gridOptions = {
                context: {
                    componentParent: this
                }
            };
            this.createRowData();
            this.createColumnDefs();
        },
        mounted() {
            this.gridOptions.api.sizeColumnsToFit();
        }
    }
</script>

<style>
</style>
