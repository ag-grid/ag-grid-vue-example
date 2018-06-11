<template>
    <span :style="style">{{params.value}}</span>
</template>
<script>
    import Vue from "vue";

    export default Vue.extend({
        data() {
            return {
                style: null
            }
        },
        methods: {
            refresh(params) {
                this.params = params;
                this.style = this.params.style;
            },
        },
        created() {
            this.style = this.params.style;
        }
    })
</script>