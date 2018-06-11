<template>
    <input style="height: 20px; width: 100%" :ref="'input'" v-model="text"></template>
<script>
    import Vue from "vue";

    export default Vue.extend({
        data() {
            return {
                text: '',
                valueGetter: null
            }
        },
        methods: {
            isFilterActive() {
                return this.text !== null && this.text !== undefined && this.text !== '';
            },

            doesFilterPass(params) {
                return !this.text || this.text.toLowerCase()
                    .split(" ")
                    .every((filterWord) => {
                        return this.valueGetter(params.node).toString().toLowerCase().indexOf(filterWord) >= 0;
                    });
            },

            getModel() {
                return {value: this.text};
            },

            setModel(model) {
                if (model) {
                    this.text = model.value;
                }
            },

            afterGuiAttached() {
                this.$refs.input.focus();
            },

            componentMethod(message) {
                alert(`Alert from PartialMatchFilterComponent ${message}`);
            },
        },
        watch: {
            'text': function (val, oldVal) {
                if (val !== oldVal) {
                    this.params.filterChangedCallback();
                }
            }
        },
        created() {
            this.valueGetter = this.params.valueGetter;
        }
    })
</script>

