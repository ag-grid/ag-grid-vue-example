<template>
    <div id="app"></div>
</template>

<script>
    import Vue from "vue";

    import "../node_modules/ag-grid/dist/styles/ag-grid.css"
    import "../node_modules/ag-grid/dist/styles/theme-fresh.css"
    // only needed if you're using enterprise features
    import "ag-grid-enterprise/main";

    import DynamicComponentExample from './dynamic-component-example/DynamicComponentExample.vue'
    import FloatingRowExample from './floating-row-example/FloatingRowExample.vue'
    import FullWidthRowExample from './full-width-example/FullWidthExample.vue'
    import GroupedRowExample from './grouped-row-example/GroupedRowExample.vue'

    export default {
        components: {
            'dynamic-components-example': DynamicComponentExample,
            'floating-row-example': FloatingRowExample,
            'full-width-row-example': FullWidthRowExample,
            'grouped-row-example': GroupedRowExample
        }
    }
</script>

<style>
</style>
