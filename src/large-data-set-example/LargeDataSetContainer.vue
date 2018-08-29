<template>
	<div>		
        <h1>Large Data Set Component (100k+ rows, 95 Columns) ({{rowCount}} shown)</h1>

		<div v-if="realData.length > 1 && ISaidSo">
			<LargeDataSetExample ref="detailGrid" :setRowCount="setRowCount"  />
			<!-- :updateRowCount="updateRowCount" :activeRowData="realData" :activeColDefs="columnDefs" :searchProp="searchProp" :setSearchProp="setSearchProp" -->
		</div>
		<div v-else>
			<div class="container">
				<div class="spinner"></div>
			</div>
		</div>
	</div>
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
			ISaidSo: false
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

		setTimeout(()=>{
			localThis.ISaidSo = true
		}, 1000)
	}

}
</script>

<style>

.spinner {
    position: relative;
    width: 50vw; 
    padding-top: 50vw;
    margin: 10% auto;
    -webkit-animation: rotation .6s infinite linear;
    animation: rotation .6s infinite linear;
    border-left: 6px solid rgba(0, 174, 239, 0.15);
    border-right: 6px solid rgba(0, 174, 239, 0.15);
    border-bottom: 6px solid rgba(0, 174, 239, 0.15);
    border-top: 6px solid rgba(0, 174, 239, 0.8);
    border-radius: 100%;
}
@-webkit-keyframes rotation {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
  }
}

@-moz-keyframes rotation {
  from {
    -moz-transform: rotate(0deg);
  }
  to {
    -moz-transform: rotate(359deg);
  }
}

@-o-keyframes rotation {
  from {
    -o-transform: rotate(0deg);
  }
  to {
    -o-transform: rotate(359deg);
  }
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>