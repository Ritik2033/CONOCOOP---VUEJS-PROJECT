<template>
    <div class="product-container">
        <sidebar class="navbar" />
        <div class="product_details">
            <page6 />
        </div>
    </div>
</template>
  
<script>
import Sidebar from './Sidebar.vue';
import page6 from './page6.vue';

export default {
    name: 'ApproveAppli',

    components: {
        Sidebar,
        page6
    },
};
</script>
  
<style scoped>
#app {
    height: 100vh;
    background-color: #f4f5fa;
}

.product-container {
    display: grid;
    grid-template-columns: 1fr 10fr;
    background-color: #f4f5fa;
}

.navbar {
    grid-column: 1;
    margin-right: 1rem;
}

.product_details {
    grid-column: 2;
    margin-top: 5rem;
}

@media (max-width: 500px) {

   
}
</style>
  