<template id="app">
    <div class="product-container">
        <sidebar class="navbar" />
        <div class="product_details">
            <Farm3/>
        </div>
    </div>
</template>
  
<script>
import Sidebar from './Sidebar.vue';
import Farm3 from './Farm3.vue';

export default {
    name: 'Farm3total',

    components: {
        Sidebar,
        Farm3
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

@media (max-width: 950px) {
    .product-container {
        display: grid;
        grid-template-columns: none !important;
        background-color: #f4f5fa;
    }
}
</style>
  