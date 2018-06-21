<template>
    <img width="20px" :src="imgForMood"/></template>
<script>
    import Vue from "vue";

    export default Vue.extend({
        data() {
            return {
                mood: 'Happy',
                imgForMood: null
            }
        },
        methods: {
            refresh(params) {
                this.params = params;
                this.setMood(params);
            },

            setMood(params) {
                this.mood = params.value;
                this.imgForMood = this.mood === 'Happy' ?
                    'https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/images/smiley.png' :
                    'https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/images/smiley-sad.png';
            }
        },
        created() {
            this.setMood(this.params);
        }
    })
</script>

<style scoped>
    img {
        vertical-align: baseline;
    }
</style>