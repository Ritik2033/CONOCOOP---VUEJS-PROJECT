<template>
    <v-app>
        <div class="product-container">
            <sidebar class="navbar" />
            <div class="product-details">
                <page14 />
            </div>
        </div>
    </v-app>
</template>
  
<script>
import Sidebar from './Sidebar.vue';
import Page14 from '../views/page14.vue';

export default {
    name: 'page14total',
    components: {
        Sidebar,
        Page14,
    },
};
</script>
  
<style scoped>
.product-container {
    display: flex;
    align-items: flex-start;
}

.product-details {
    flex-grow: 1;
    padding: 20px;
    margin-top: 3rem;
    width: 100%;
}
</style>
  