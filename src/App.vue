<template>
    <div class="position-absolute d-flex flex-column h-100 w-100 p-2">
        <ul class="nav nav-pills" style="margin-bottom: 20px">
            <template v-for="route in routes" v-bind:key="route.path">
                <li role="presentation" class="nav-item">
                    <router-link :to="route.path" v-bind:class="{active: $route.path === route.path, 'nav-link': true }">{{route.name}}</router-link>
                </li>
            </template>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script>

export default {
    computed: {
        routes() {
            return this.$router.getRoutes()
        }
    }
}
</script>
