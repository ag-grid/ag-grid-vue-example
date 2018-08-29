import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	rowData: [],
  	columnDefs: [
            {headerName: 'Record', field: 'recordNumber', filter: 'agNumberColumnFilter'},
            {headerName: 'Value 1', field: 'value1'},
            {headerName: 'Value 2', field: 'value2'},
            {headerName: 'Value 3', field: 'value3'},
            {headerName: 'Value 4', field: 'value4'},
            {headerName: 'Value 5', field: 'value5'},
            {headerName: 'Value 6', field: 'value6'},
            {headerName: 'Value 7', field: 'value7'},
            {headerName: 'Value 8', field: 'value8'},
            {headerName: 'Value 9', field: 'value9'},
            {headerName: 'Value 10', field: 'value10'},
            {headerName: 'Value 11', field: 'value1'},
            {headerName: 'Value 12', field: 'value2'},
            {headerName: 'Value 13', field: 'value3'},
            {headerName: 'Value 14', field: 'value4'},
            {headerName: 'Value 15', field: 'value5'},
            {headerName: 'Value 16', field: 'value6'},
            {headerName: 'Value 17', field: 'value7'},
            {headerName: 'Value 18', field: 'value8'},
            {headerName: 'Value 19', field: 'value9'},
            {headerName: 'Value 20', field: 'value10'},
            {headerName: 'Value 21', field: 'value1'},
            {headerName: 'Value 22', field: 'value2'},
            {headerName: 'Value 23', field: 'value3'},
            {headerName: 'Value 24', field: 'value4'},
            {headerName: 'Value 25', field: 'value5'},
            {headerName: 'Value 26', field: 'value6'},
            {headerName: 'Value 27', field: 'value7'},
            {headerName: 'Value 28', field: 'value8'},
            {headerName: 'Value 29', field: 'value9'},
            {headerName: 'Value 30', field: 'value10'},
            {headerName: 'Value 31', field: 'value1'},
            {headerName: 'Value 32', field: 'value2'},
            {headerName: 'Value 33', field: 'value3'},
            {headerName: 'Value 34', field: 'value4'},
            {headerName: 'Value 35', field: 'value5'},
            {headerName: 'Value 36', field: 'value6'},
            {headerName: 'Value 37', field: 'value7'},
            {headerName: 'Value 38', field: 'value8'},
            {headerName: 'Value 39', field: 'value9'},
            {headerName: 'Value 40', field: 'value10'},
            {headerName: 'Value 41', field: 'value1'},
            {headerName: 'Value 42', field: 'value2'},
            {headerName: 'Value 43', field: 'value3'},
            {headerName: 'Value 44', field: 'value4'},
            {headerName: 'Value 45', field: 'value5'},
            {headerName: 'Value 46', field: 'value6'},
            {headerName: 'Value 47', field: 'value7'},
            {headerName: 'Value 48', field: 'value8'},
            {headerName: 'Value 49', field: 'value9'},
            {headerName: 'Value 50', field: 'value10'},
            {headerName: 'Value 51', field: 'value1'},
            {headerName: 'Value 52', field: 'value2'},
            {headerName: 'Value 53', field: 'value3'},
            {headerName: 'Value 54', field: 'value4'},
            {headerName: 'Value 55', field: 'value5'},
            {headerName: 'Value 56', field: 'value6'},
            {headerName: 'Value 57', field: 'value7'},
            {headerName: 'Value 58', field: 'value8'},
            {headerName: 'Value 59', field: 'value9'},
            {headerName: 'Value 60', field: 'value10'},
            {headerName: 'Value 61', field: 'value1'},
            {headerName: 'Value 62', field: 'value2'},
            {headerName: 'Value 63', field: 'value3'},
            {headerName: 'Value 64', field: 'value4'},
            {headerName: 'Value 65', field: 'value5'},
            {headerName: 'Value 66', field: 'value6'},
            {headerName: 'Value 67', field: 'value7'},
            {headerName: 'Value 68', field: 'value8'},
            {headerName: 'Value 69', field: 'value9'},
            {headerName: 'Value 70', field: 'value10'},
            {headerName: 'Value 71', field: 'value1'},
            {headerName: 'Value 72', field: 'value2'},
            {headerName: 'Value 73', field: 'value3'},
            {headerName: 'Value 74', field: 'value4'},
            {headerName: 'Value 75', field: 'value5'},
            {headerName: 'Value 76', field: 'value6'},
            {headerName: 'Value 77', field: 'value7'},
            {headerName: 'Value 78', field: 'value8'},
            {headerName: 'Value 79', field: 'value9'},
            {headerName: 'Value 80', field: 'value10'},
            {headerName: 'Value 81', field: 'value1'},
            {headerName: 'Value 82', field: 'value2'},
            {headerName: 'Value 83', field: 'value3'},
            {headerName: 'Value 84', field: 'value4'},
            {headerName: 'Value 85', field: 'value5'},
            {headerName: 'Value 86', field: 'value6'},
            {headerName: 'Value 87', field: 'value7'},
            {headerName: 'Value 88', field: 'value8'},
            {headerName: 'Value 89', field: 'value9'},
            {headerName: 'Value 90', field: 'value10'},
            {headerName: 'Value 91', field: 'value1'},
            {headerName: 'Value 92', field: 'value2'},
            {headerName: 'Value 93', field: 'value3'},
            {headerName: 'Value 94', field: 'value4'}
        ]
  },
  mutations: {
  	saveRowData(state, payload) {
  		state.rowData = payload
  	}
  },
  actions: {
  	createRowData(context, payload) {
  		let rowData = []
  		     for (let i = 0; i < 100500; i++) {
                rowData.push({
                    recordNumber: i,
                    value1: Math.floor(Math.random() * i),
                    value2: Math.floor(Math.random() * i),
                    value3: Math.floor(Math.random() * i),
                    value4: Math.floor(Math.random() * i),
                    value5: Math.floor(Math.random() * i),
                    value6: Math.floor(Math.random() * i),
                    value7: Math.floor(Math.random() * i),
                    value8: Math.floor(Math.random() * i),
                    value9: Math.floor(Math.random() * i),
                    value10: Math.floor(Math.random() * i)

                });
            }
         context.commit('saveRowData', rowData)
  	}
  }
})
