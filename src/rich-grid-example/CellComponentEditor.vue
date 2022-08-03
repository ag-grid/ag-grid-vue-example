<template>
    <input :ref="'input'" v-model="value"/>
</template>

<script>
import {nextTick} from 'vue';

export default {
    data() {
        return {
            value: '',
            cancelBeforeStart: true,
            highlightAllOnFocus: true
        };
    },
    methods: {
        getValue() {
            return `[[${this.value}]]`;
        },

        isCancelBeforeStart() {
            return false;
        },

        isCancelAfterEnd() {
            return false;
        }
    },

    created() {
        this.value = this.params.value;
    },
    mounted() {
        nextTick(() => {
            // need to check if the input reference is still valid - if the edit was cancelled before it started there
            // wont be an editor component anymore
            if (this.$refs.input) {
                this.$refs.input.focus();
            }
        });
    }
}
</script>

<style scoped>
</style>


