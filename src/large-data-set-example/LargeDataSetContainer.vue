<template>
	<v-container fluid grid-list-md text-xs-center>
	<v-layout row wrap align-center>		
        <h1>Large Data Set Component (100k+ rows, 95 Columns) ({{rowCount}} shown)</h1>

		<v-flex xs12 v-if="realData.length > 1 && ISaidSo" >
			<LargeDataSetExample ref="detailGrid" :setRowCount="setRowCount"  />
			<!-- :searchProp="searchProp" :setSearchProp="setSearchProp" -->
		</v-flex>
		<v-flex xs12 v-else>
			<v-progress-circular color="blue" :indeterminate="trueVariableForVuetifyTypeErrors"  :size="vhToPx" />	
		</v-flex>
	</v-layout>
</v-container>
</template>
<script>
	import LargeDataSetExample from './LargeDataSetExample.vue'
	import {mapState, mapGetters} from 'vuex'

export default {
	components: {
		LargeDataSetExample,
	},
	data: function(){
		return {
			rowCount: 0,
			ISaidSo: true,
			trueVariableForVuetifyTypeErrors: true,
			vhToPx: document.documentElement.clientHeight * .85,
		}
	},
	computed: {
		realData(){
			return this.$store.state.rowData
		}
	},
	methods: {
		setRowCount(count){
			this.rowCount = count
		}
	},
	mounted(){
		let localThis = this 

		// setTimeout(()=>{
		// 	localThis.ISaidSo = true
		// }, 1000)
	}

}
</script>

<style>
.container {
	margin: 10px;
	width: 100%;
}
</style>