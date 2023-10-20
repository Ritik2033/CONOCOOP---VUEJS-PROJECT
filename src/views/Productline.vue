<template>
<v-app>
     <Sidebar/>
          <div class="fixed-demo">
        <page8/>
        
        </div>
</v-app>
</template>
<script>
import Sidebar from './Sidebar.vue';
import page8 from './page8.vue';
export default {
    name: 'Productline',

    components: {
         Sidebar,
        page8
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