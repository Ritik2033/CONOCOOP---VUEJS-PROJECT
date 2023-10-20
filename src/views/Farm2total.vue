<template id="app">
    <div class="product-container">
        <Sidebar class="navbar" />
        <Farm2 class="product_details" />
    </div>
</template>
  
<script>
import Sidebar from './Sidebar.vue';
import Farm2 from './Farm2.vue';

export default {
    name: 'Farm2total',

    components: {
        Sidebar,
        Farm2,
    },
};
</script>
  
<style scoped>
#app {
    font-family: 'Neo', sans-serif;
}

#app {
    height: 100vh;
    background-color: #f4f5fa;
    background-color: #ffffff;
}

.product-container {
    display: flex;
    background-color: #ffffff;
    overflow: hidden;
    font-family: 'Neo', sans-serif;
}

.navbar {
    margin-right: 1rem;
}

.product_details {
    flex: 10;
    margin-top: 5rem;
    overflow-y: hidden;
    margin-left: 0;
}

@media (max-width: 768px) {
    .product_details {
        flex: 10;
        margin-top: 5rem;
        margin-left: 0;
    }
}
</style>
