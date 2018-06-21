import RichGridExample from "./rich-grid-example/RichGridExample.vue";
import DynamicComponentExample from "./dynamic-component-example/DynamicComponentExample.vue";
import EditorComponentExample from "./editor-component-example/EditorComponentExample.vue";
import FilterExample from "./filter-example/FilterExample.vue";
import LargeDataSetExample from "./large-data-set-example/LargeDataSetExample.vue";

export default [
    {
        path: '/',
        components: {
            default: RichGridExample,
            dynamic: DynamicComponentExample,
            editor: EditorComponentExample,
            filter: FilterExample
        },
        name: "Rich Grid with Pure JavaScript"
    },
    {path: '/dynamic', component: DynamicComponentExample, name: "Dynamic Components Example"},
    {path: '/editor', component: EditorComponentExample, name: "Editor Component Example"},
    {path: '/filter', component: FilterExample, name: "Filter Example"},
    {path: '/large-data', component: LargeDataSetExample, name: "Large Data Example"}
];