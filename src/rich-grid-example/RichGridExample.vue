<template>
    <div class="d-flex flex-column w-100 flex-grow-1 flex-shrink-1">
        <div style="padding: 4px;">
            <div style="float: right;" class="d-flex">
                <input class="mr-2 form-control d-inline-block" @keyup="onQuickFilterChanged" type="text" id="quickFilterInput"
                       placeholder="Type text to filter..."/>
                <button class="btn btn-primary mr-2" :disabled="!showGrid" @click="showGrid=false" style="white-space: nowrap;">Destroy Grid</button>
                <button class="btn btn-primary" :disabled="showGrid" @click="showGrid=true" style="white-space: nowrap;">Create Grid</button>
            </div>
            <div>
                <b>Employees Skills and Contact Details</b>
                {{ rowCount }}
            </div>
        </div>
        <div style="clear: both;"></div>
        <div v-if="showGrid" class="d-flex flex-column flex-grow-1 flex-shrink-1">
            <div style="padding: 4px;" class="btn-toolbar">
            <span>
                Grid API:
                <button class="btn btn-primary mx-1" @click="api.selectAll()">Select All</button>
                <button class="btn btn-primary mx-1" @click="api.deselectAll()">Clear Selection</button>
            </span>
                <span style="margin-left: 20px;">
                Column API:
                <button class="btn btn-primary mx-1" @click="api.setColumnsVisible(['country'], false)">Hide Country Column</button>
                <button class="btn btn-primary mx-1" @click="api.setColumnsVisible(['country'], true)">Show Country Column</button>
            </span>
            </div>
            <div class="btn-toolbar d-flex align-items-center py-2">
                <label class="m-0">
                    <input type="checkbox" v-model="sideBar"/>
                    Show Side Bar
                </label>
                <button class="btn btn-primary mx-1" @click="createRowData()">Refresh Data</button>
            </div>
            <ag-grid-vue style="width: 100%;" class="flex-grow-1 flex-shrink-1 ag-theme-alpine"
                         :columnDefs="columnDefs"
                         :rowData="rowData"
                         :sideBar="sideBar"
                         :modules="modules"

                         :defaultColDef="{
                            sortable: true,
                            resizable: true,
                            filter: true
                         }"

                         :groupHeaders="true"
                         :suppressRowClickSelection="true"
                         rowSelection="multiple"

                         @grid-ready="onReady"
                         @cell-clicked="onCellClicked"
                         @cell-double-clicked="onCellDoubleClicked"
                         @cell-context-menu="onCellContextMenu"
                         @cell-value-changed="onCellValueChanged"
                         @cell-focused="onCellFocused"
                         @row-selected="onRowSelected"
                         @selection-changed="onSelectionChanged"
                         @filter-modified="onFilterModified"
                         @virtual-row-removed="onVirtualRowRemoved"
                         @row-clicked="onRowClicked"
                         @column-everything-changed="onColumnEvent"
                         @column-row-group-changed="onColumnEvent"
                         @column-value-Changed="onColumnEvent"
                         @column-moved="onColumnEvent"
                         @column-visible="onColumnEvent"
                         @column-group-Opened="onColumnEvent"
                         @column-resized="onColumnEvent"
                         @column-pinned-count-changed="onColumnEvent">
            </ag-grid-vue>
        </div>
    </div>
</template>

<script>
import {AgGridVue} from "@ag-grid-community/vue";

import {ProficiencyFilter} from './proficiencyFilter';
import {SkillFilter} from './skillFilter';
import DateComponent from './DateComponent.vue';
import HeaderGroupComponent from './HeaderGroupComponent.vue';
import RefData from './refData'

import {ClientSideRowModelModule} from "@ag-grid-community/client-side-row-model";
import {ColumnsToolPanelModule} from "@ag-grid-enterprise/column-tool-panel";
import {ExcelExportModule} from "@ag-grid-enterprise/excel-export";
import {FiltersToolPanelModule} from "@ag-grid-enterprise/filter-tool-panel";
import {SparklinesModule} from "@ag-grid-enterprise/sparklines";
import {GridChartsModule} from "@ag-grid-enterprise/charts";
import {MasterDetailModule} from "@ag-grid-enterprise/master-detail";
import {MenuModule} from "@ag-grid-enterprise/menu";
import {MultiFilterModule} from "@ag-grid-enterprise/multi-filter";
import {RangeSelectionModule} from "@ag-grid-enterprise/range-selection";
import {RichSelectModule} from "@ag-grid-enterprise/rich-select";
import {RowGroupingModule} from "@ag-grid-enterprise/row-grouping";
import {ServerSideRowModelModule} from "@ag-grid-enterprise/server-side-row-model";
import {SetFilterModule} from "@ag-grid-enterprise/set-filter";
import {SideBarModule} from "@ag-grid-enterprise/side-bar";
import {StatusBarModule} from "@ag-grid-enterprise/status-bar";
import {ViewportRowModelModule} from "@ag-grid-enterprise/viewport-row-model";
import {ClipboardModule} from "@ag-grid-enterprise/clipboard";

export default {
    data() {
        return {
            api: null,
            columnDefs: null,
            rowData: null,
            showGrid: false,
            sideBar: false,
            rowCount: null,
            modules: [
                ClientSideRowModelModule,
                ColumnsToolPanelModule,
                ExcelExportModule,
                FiltersToolPanelModule,
                SparklinesModule,
                GridChartsModule,
                MasterDetailModule,
                MenuModule,
                MultiFilterModule,
                RangeSelectionModule,
                RichSelectModule,
                RowGroupingModule,
                ServerSideRowModelModule,
                SetFilterModule,
                SideBarModule,
                StatusBarModule,
                ViewportRowModelModule,
                ClipboardModule
            ]
        }
    },
    components: {
        AgGridVue,
        SkillFilter,
        HeaderGroupComponent,
        agDateInput: DateComponent
    },
    methods: {
        createRowData() {
            const rowData = [];

            for (let i = 0; i < 200; i++) {
                const countryData = RefData.COUNTRIES[i % RefData.COUNTRIES.length];
                rowData.push({
                    name: RefData.FIRST_NAMES[i % RefData.FIRST_NAMES.length] + ' ' + RefData.LAST_NAMES[i % RefData.LAST_NAMES.length],
                    skills: {
                        android: Math.random() < 0.4,
                        html5: Math.random() < 0.4,
                        mac: Math.random() < 0.4,
                        windows: Math.random() < 0.4,
                        css: Math.random() < 0.4
                    },
                    dob: RefData.DOBs[i % RefData.DOBs.length],
                    address: RefData.ADDRESSES[i % RefData.ADDRESSES.length],
                    years: Math.round(Math.random() * 100),
                    proficiency: Math.round(Math.random() * 100),
                    country: countryData.country,
                    continent: countryData.continent,
                    language: countryData.language,
                    mobile: createRandomPhoneNumber(),
                    landline: createRandomPhoneNumber()
                });
            }

            this.rowData = rowData;
        },
        createColumnDefs() {
            this.columnDefs = [
                {
                    headerName: '#', minWidth: 60, width: 60, checkboxSelection: true, sortable: false,
                    suppressMenu: true, pinned: true
                },
                {
                    headerName: 'Employee',
                    headerGroupComponent: 'HeaderGroupComponent',
                    children: [
                        {
                            headerName: "Name", field: "name",
                            width: 150, pinned: true,
                        },
                        {
                            headerName: "Country", field: "country", width: 150,
                            cellRenderer: countryCellRenderer, pinned: true,
                            filterParams: {cellRenderer: countryCellRenderer, cellHeight: 20}
                        },
                        {
                            headerName: "DOB",
                            field: "dob",
                            width: 120,
                            pinned: true,
                            cellRenderer: (params) => {
                                return this.pad(params.value.getDate(), 2) + '/' +
                                    this.pad(params.value.getMonth() + 1, 2) + '/' +
                                    params.value.getFullYear();
                            },
                            filter: 'agDateColumnFilter',
                            columnGroupShow: 'open'
                        }
                    ]
                },
                {
                    headerName: 'IT Skills',
                    children: [
                        {
                            headerName: "Skills",
                            width: 125,
                            sortable: false,
                            cellRenderer: skillsCellRenderer,
                            filter: SkillFilter
                        },
                        {
                            headerName: "Proficiency",
                            field: "proficiency",
                            width: 120,
                            cellRenderer: percentCellRenderer,
                            filter: ProficiencyFilter
                        },
                    ]
                },
                {
                    headerName: 'Contact',
                    children: [
                        {headerName: "Mobile", field: "mobile", width: 150, filter: 'text'},
                        {headerName: "Land-line", field: "landline", width: 150, filter: 'text'},
                        {headerName: "Address", field: "address", width: 500, filter: 'text'}
                    ]
                }
            ];
        },
        pad(num, totalStringSize) {
            let asString = num + "";
            while (asString.length < totalStringSize) asString = "0" + asString;
            return asString;
        },


        onReady(params) {
            console.log('onReady');

            this.api = params.api;
            this.api.sizeColumnsToFit();
        },

        onCellClicked(event) {
            console.log('onCellClicked: ' + event.rowIndex + ' ' + event.colDef.field);
        },

        onCellValueChanged(event) {
            console.log('onCellValueChanged: ' + event.oldValue + ' to ' + event.newValue);
        },

        onCellDoubleClicked(event) {
            console.log('onCellDoubleClicked: ' + event.rowIndex + ' ' + event.colDef.field);
        },

        onCellContextMenu(event) {
            console.log('onCellContextMenu: ' + event.rowIndex + ' ' + event.colDef.field);
        },

        onCellFocused(event) {
            console.log('onCellFocused: (' + event.rowIndex + ',' + event.colIndex + ')');
        },

        // taking out, as when we 'select all', it prints to much to the console!!
        // eslint-disable-next-line
        onRowSelected(event) {
            // console.log('onRowSelected: ' + event.node.data.name);
        },

        onSelectionChanged() {
            console.log('selectionChanged');
        },

        onFilterModified() {
            console.log('onFilterModified');
        },

        // eslint-disable-next-line
        onVirtualRowRemoved(event) {
            // because this event gets fired LOTS of times, we don't print it to the
            // console. if you want to see it, just uncomment out this line
            // console.log('onVirtualRowRemoved: ' + event.rowIndex);
        },

        onRowClicked(event) {
            console.log('onRowClicked: ' + event.node.data.name);
        },

        onQuickFilterChanged(event) {
            this.api.setQuickFilter(event.target.value);
        },

        // here we use one generic event to handle all the column type events.
        // the method just prints the event name
        onColumnEvent(event) {
            console.log('onColumnEvent: ' + event);
        }
    },
    beforeMount() {
        this.api = {};
        this.createRowData();
        this.createColumnDefs();
        this.showGrid = true;
    }
}

function skillsCellRenderer(params) {
    let data = params.data;
    let skills = [];
    RefData.IT_SKILLS.forEach(function (skill) {
        if (data && data.skills && data.skills[skill]) {
            skills.push('<img src="https://www.ag-grid.com/example-assets/skills/' + skill + '.png" width="16px" title="' + skill + '" />');
        }
    });
    return skills.join(' ');
}

function countryCellRenderer(params) {
    let flag = "<img border='0' width='15' height='10' style='margin-bottom: 2px' src='https://www.ag-grid.com/example-assets/flags/" + RefData.COUNTRY_CODES[params.value] + ".png'>";
    return flag + " " + params.value;
}

function createRandomPhoneNumber() {
    let result = '+';
    for (let i = 0; i < 12; i++) {
        result += Math.round(Math.random() * 10);
        if (i === 2 || i === 5 || i === 8) {
            result += ' ';
        }
    }
    return result;
}

function percentCellRenderer(params) {
    let value = params.value;

    let eDivPercentBar = document.createElement('div');
    eDivPercentBar.className = 'div-percent-bar';
    eDivPercentBar.style.width = value + '%';
    if (value < 20) {
        eDivPercentBar.style.backgroundColor = 'red';
    } else if (value < 60) {
        eDivPercentBar.style.backgroundColor = '#ff9900';
    } else {
        eDivPercentBar.style.backgroundColor = '#00A000';
    }

    let eValue = document.createElement('div');
    eValue.className = 'div-percent-value';
    eValue.innerHTML = value + '%';

    let eOuterDiv = document.createElement('div');
    eOuterDiv.className = 'div-outer-div';
    eOuterDiv.appendChild(eValue);
    eOuterDiv.appendChild(eDivPercentBar);

    return eOuterDiv;
}

</script>

<style>
.ag-cell {
    padding-top: 2px !important;
    padding-bottom: 2px !important;
}

label {
    font-weight: normal !important;
}

.div-percent-bar {
    display: inline-block;
    height: 100%;
    position: relative;
    z-index: 0;
}

.div-percent-value {
    position: absolute;
    padding-left: 4px;
    font-weight: bold;
    font-size: 13px;
    z-index: 100;
}

.div-outer-div {
    display: inline-block;
    height: 100%;
    width: 100%;
}

.ag-menu {
    z-index: 200;
}

.toolbar button {
    margin-left: 5px;
    margin-right: 5px;
    padding: 2px;
}
</style>
