<template>
    <v-app>
        <Sidebar />
        <div class="fixed-demo">
            <Productfe/>

        </div>
    </v-app>
</template>
<script>
import Sidebar from './Sidebar.vue';
import Productfe from './Productfe.vue';
export default {
    name: 'Productfeature',

    components: {
        Sidebar,
        Productfe
    },
};
</script>
<style scoped>
.fixed-demo {
    position: absolute;
    top: 0;
    margin-top: 5rem;

    left: 0;
    background-color: white;

    width: 100%;
    z-index: 100;
}
</style>