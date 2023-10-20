<template>
    <v-app>

        <page12 />

        <div class="fixed-demo">
            <page11 />
        </div>



    </v-app>
</template>

<script>
import page11 from '../views/page11.vue'
import page12 from '../views/page12.vue'
export default {
    name: 'page10',

    components: {
       page12,
        page11
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
    