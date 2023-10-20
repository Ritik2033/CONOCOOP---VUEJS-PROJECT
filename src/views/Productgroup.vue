<template>
    <v-app>
        <Sidebar/>
        <div class="fixed-demo">
            <prodgroup/>

        </div>
    </v-app>
</template>
<script>
import Sidebar from './Sidebar.vue';
import prodgroup from './prodgroup.vue';
export default {
    name: 'Productgroup',

    components: {
        Sidebar,
        prodgroup
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