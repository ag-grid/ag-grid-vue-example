<template>
    <div>
        <div class="customHeaderLabel"> {{ params.displayName }}</div>
        <div @click="expandOrCollapse"
             :class="expandOrCollapseClass">
            <i class="fa fa-arrow-right"></i>
        </div>
    </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
    data() {
        return {
            expanded: null
        }
    },
    computed: {
        expandOrCollapseClass: function () {
            return {
                'customExpandButton expanded': this.expanded,
                'customExpandButton collapsed': !this.expanded
            }
        }
    },
    methods: {
        expandOrCollapse() {
            this.params.setExpanded(!this.expanded);
        },

        onExpandChanged() {
            this.expanded = this.params.columnGroup.getProvidedColumnGroup().isExpanded()
        }
    },
    mounted() {
        this.params.columnGroup.getProvidedColumnGroup().addEventListener('expandedChanged', this.onExpandChanged.bind(this));
    }
})

</script>

<style scoped>
.customHeaderLabel {
    margin-left: 5px;
    margin-top: 3px;
    float: left;
}

.customExpandButton {
    float: right;
    margin-top: 5px;
    margin-left: 3px;
}

.expanded {
    animation-name: toExpanded;
    animation-duration: 1s;
    -webkit-transform: rotate(180deg); /* Chrome, Safari, Opera */
    transform: rotate(180deg);
}

.collapsed {
    color: cornflowerblue;
    animation-name: toCollapsed;
    animation-duration: 1s;
    -webkit-transform: rotate(0deg); /* Chrome, Safari, Opera */
    transform: rotate(0deg);
}

@keyframes toExpanded {
    from {
        color: cornflowerblue;
        -webkit-transform: rotate(0deg); /* Chrome, Safari, Opera */
        transform: rotate(0deg);
    }
    to {
        color: black;
        -webkit-transform: rotate(180deg); /* Chrome, Safari, Opera */
        transform: rotate(180deg);
    }
}

@keyframes toCollapsed {
    from {
        color: black;
        -webkit-transform: rotate(180deg); /* Chrome, Safari, Opera */
        transform: rotate(180deg);
    }
    to {
        color: cornflowerblue;
        -webkit-transform: rotate(0deg); /* Chrome, Safari, Opera */
        transform: rotate(0deg);
    }
}
</style>
