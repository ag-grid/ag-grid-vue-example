<template>
    <span>Full Width Column! {{ values }}</span>
</template>
<script>
    import Vue from "vue";

    export default Vue.extend({
        data() {
            return {
                values: null
            }
        },
        created() {
            this.values = `Name: ${this.params.data.name}, Age: ${this.params.data.age}`;
        }
    })
</script>