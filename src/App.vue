<template>
    <RichGridExample></RichGridExample>
</template>
<script>
import RichGridExample from "./rich-grid-example/RichGridExample";

export default {
    name: 'App',
    components: {
        RichGridExample
    }
}
</script>
<!--
<template>
    <ag-grid-vue style="width: 500px; height: 500px;"
                 class="ag-theme-alpine"
                 :columnDefs="columnDefs"
                 :rowData="rowData"
                 :modules="modules"
                 @grid-ready="myGridReady"
                 rowSelection="multiple">
    </ag-grid-vue>
</template>
&lt;!&ndash;
@gridReady="myGridReady"
$attrs - name onGrid-ready"
this.$emit('gridReady', event)

@grid-ready="myGridReady"
$attrs - name onGrid-ready"
this.$emit('grid-ready', event)

&ndash;&gt;
<script>
import {ClientSideRowModelModule} from "@ag-grid-community/client-side-row-model";
import {AgGridVue} from "@ag-grid-community/vue";

export default {
    name: 'App',
    data() {
        return {
            columnDefs: null,
            rowData: null,
            modules: [ClientSideRowModelModule]
        }
    },
    components: {
        AgGridVue,
        // eslint-disable-next-line
        'CubeComponent': {
            template: '<span>{{ valueCubed() }}</span>',
            methods: {
                valueCubed() {
                    return this.params.value * this.params.value * this.params.value;
                }
            }
        },
    },
    methods: {
        myGridReady(params) {
            console.log('x', params);
        },
    },
    beforeMount() {
        this.columnDefs = [
            {headerName: 'Make', field: 'make', checkboxSelection: true},
            {headerName: 'Model', field: 'model'},
            {headerName: 'Price', field: 'price', cellRendererFramework: 'CubeComponent'}
        ];

        fetch('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/smallRowData.json')
            .then(result => result.json())
            .then(rowData => this.rowData = rowData);
    }
}
</script>
-->
