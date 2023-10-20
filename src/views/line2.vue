<template id="app">
    <v-app>

        <Sidebar />

        <div class="fixed-demo">
            <line1 />
        </div>



    </v-app>
</template>

<script>
import line1 from '../views/line1.vue'

import Sidebar from '../views/Sidebar.vue'
export default {
    name: 'line2',

    components: {
        Sidebar,
        line1
    },

}
</script>

<style scoped>
#app {
    font-family: 'Neo', sans-serif;
}

.fixed-demo {
    position: absolute;
    top: 0;
    margin-top: 3rem;

    left: 0;

    width: 100%;
    z-index: 100;
}
</style>

.....