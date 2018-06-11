import RichGridExample from "./rich-grid-example/RichGridExample.vue";
import DynamicComponentExample from "./dynamic-component-example/DynamicComponentExample.vue";
import EditorComponentExample from "./editor-component-example/EditorComponentExample.vue";
import PinnedRowExample from "./pinned-row-example/PinnedRowExample.vue";
import FullWidthRowExample from "./full-width-example/FullWidthExample.vue";
import GroupedRowExample from "./grouped-row-example/GroupedRowExample.vue";
import FilterExample from "./filter-example/FilterExample.vue";
import LargeDataSetExample from "./large-data-set-example/LargeDataSetExample.vue";

export default [
    {
        path: '/',
        components: {
            default: RichGridExample,
            dynamic: DynamicComponentExample,
            editor: EditorComponentExample,
            pinned: PinnedRowExample,
            "full-width": FullWidthRowExample,
            "grouped-row": GroupedRowExample,
            filter: FilterExample
        },
        name: "Rich Grid with Pure JavaScript"
    },
    {path: '/dynamic', component: DynamicComponentExample, name: "Dynamic Components Example"},
    {path: '/editor', component: EditorComponentExample, name: "Editor Component Example"},
    {path: '/pinned', component: PinnedRowExample, name: "Pinned Row Example"},
    {path: '/full-width', component: FullWidthRowExample, name: "Full Width Row Example"},
    {path: '/grouped-row', component: GroupedRowExample, name: "Grouped Row Example"},
    {path: '/filter', component: FilterExample, name: "Filter Example"},
    {path: '/large-data', component: LargeDataSetExample, name: "Large Data Example"}
];