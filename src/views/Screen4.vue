<template>
    <v-app>
    <Sidebar/>
      <div class="fixed-demo">
    <page3/>
    <page4/>
    <page5/></div>
    </v-app>
</template>
<script>
import Sidebar from './Sidebar.vue';
import page3 from '../views/page3.vue'
import page4 from '../views/page4.vue'
import page5 from '../views/page5.vue'

export default {
    name: 'Screen4',
     components: {
        Sidebar,
         page3,
         page4,
        page5
    },

}
</script>
<style scoped>
.fixed-demo {
        position: absolute;
        top: 0;
        margin-top: 3rem;
      
        left: 0;
        background-color: white;
       
        width: 100%;
        z-index: 100;
}</style>