<template>
    <div class="fullWidthPercent" :style="{width: widthOfThing}">
        <div 
            :style="{width: valueAsPercent + '%', backgroundColor: backgroundColor}" 
            class="percentBar"
        >
            <span class="noValue">
            </span>
        </div> 
        <span class="valueAsPercent" :style="{left: leftnessOfValue}">
            {{valueAsPercent}}%
        </span>
    </div>
</template>

<script>
    import Vue from "vue";

    export default Vue.extend({
        data(){
            return {
                parentWidth: 200,
                value: 0,
                mouseIsOver: false
            }
        },
        computed: {
            valueAsPercent() {
                return this.params.value * 100
            },
            backgroundColor(){
                if (this.value < 1) {
                    return '#C1CDC1'
                } else {
                    return '#1643f9'
                }
            },
            leftnessOfValue(){
                return this.parentWidth + 5 + 'px'
            },
            widthOfThing(){
                return this.parentWidth + 'px'
            }
        },
        created() {
            this.parentWidth = (this.params.column.actualWidth - 50)
            this.value = this.params.value
        }
    });

</script>

<style scoped>
.fullWidthPercent {
    width: 100%;
    text-align:left!important;
}
.percentBar{
    border-radius:5px;
    display:inline-block;
}
.valueAsPercent {
    display: none;
    position: absolute;
}
.noValue {
   display:inline-block;
}
.fullWidthPercent:hover .valueAsPercent{
    display:inline-block;
}
</style>
