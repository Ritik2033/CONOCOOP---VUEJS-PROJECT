<template>
    <div class="product-container">
        <Sidebar class="navbar" />
        <page1 class="product_details" />
    </div>
</template>
  
<script>
import page1 from '../views/page1.vue'
import Sidebar from '../views/Sidebar.vue'

export default {
    name: 'Setting',

    components: {
      Sidebar,
        page1
      
       
    },
};
</script>
  
<style scoped>
#app {
    height: 100vh;
    background-color: #f4f5fa;
}

.product-container {
    display: flex;
    flex-wrap: wrap;
    background-color: #f4f5fa;
}

.navbar {
    margin-right: 1rem;
}

.product_details {
    flex: 10; margin-top: 5rem;
}

@media (max-width: 768px) {
   .product_details {
        flex: 5; margin-top: 5rem;
    }
}
</style>