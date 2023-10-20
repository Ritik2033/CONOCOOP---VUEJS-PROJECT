<template>
    <v-app>

        <Sidebar />

        <div class="fixed-demo">
            <graph/>
        </div>



    </v-app>
</template>

<script>
import graph from '../views/graph.vue'

import Sidebar from '../views/Sidebar.vue'
export default {
    name: 'Dashboard',

    components: {
        Sidebar,
        graph
    },

}
</script>

<style scoped>
.fixed-demo {
    position: absolute;
    top: 0;
    margin-top: 3rem;

    left: 0;

    width: 100%;
    z-index: 100;
}
</style>
