import RichGridExample from "./rich-grid-example/RichGridExample.vue";
import LargeDataSetContainer from "./large-data-set-example/LargeDataSetContainer.vue";

export default [
    {
        path: '/',
        components: {
            default: RichGridExample
        },
        name: "Rich Grid with Pure JavaScript"
    },
    {path: '/large-data', component: LargeDataSetContainer, name: "Large Data Example"}
];