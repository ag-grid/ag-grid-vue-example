<template>
    <v-app>
        <v-toolbar app dense>
            <v-toolbar-items v-for="route in routes" :key="route.path"> 
                <v-btn flat role="presentation" :class="{active : $route.path === route.path}" :to="route.path">{{route.name}}</v-btn>
            </v-toolbar-items > 

        </v-toolbar>
        <router-view></router-view>
    </v-app>
</template>
<script>
    import routes from './routes';

    export default {
        computed: {
            forDocs() {
                return this.$route.query.forDocs || false;
            },
            routes() {
                return routes
            }
        },
    }
</script>