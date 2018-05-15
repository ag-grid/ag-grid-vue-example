<template>
    <button style="height: 22px;border-radius: 5px" @click="invokeParentMethod">Invoke Parent</button>
</template>

<script>
    import Vue from "vue";

    export default Vue.extend({
        methods: {
            invokeParentMethod() {
                this.params.context.componentParent.methodFromParent(`Row: ${this.params.node.rowIndex}, Col: ${this.params.colDef.headerName}`)
            }
        }
    });
</script>

<style>
</style>