<template>
    <div class="product-container">
        <Sidebar class="navbar" />
        <Project class="product_details" />
    </div>
</template>
  
<script>
import Sidebar from './Sidebar.vue';
import Project from './Project.vue';

export default {
    name: 'Projecttotal',

    components: {
        Sidebar,
        Project
    },
};
</script>
  
<style scoped>
#app {
    height: 100vh;
    background-color: #f4f5fa;
    background-color: #ffffff;
}

.product-container {
    display: flex;
    flex-wrap: wrap;
    background-color: #f4f5fa;
    font-family: 'Neo', sans-serif;
    background-color: #ffffff;
}

.navbar {
    margin-right: 1rem;
}

.product_details {
    flex: 10;
    margin-top: 5rem;

}

@media (max-width: 768px) {
    .product_details {
        flex: 10;
        margin-top: 5rem;
        margin-left: 0;
    }
}
</style>