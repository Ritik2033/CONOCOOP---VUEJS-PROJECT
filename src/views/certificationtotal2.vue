<template>
    <v-app>
        <div class="product-container">
            <sidebar class="navbar" />
            <div class="product_details">
                <certification2 />
            </div>

        </div>
    </v-app>
</template>

<script>
import Sidebar from './Sidebar.vue';
import certification2 from '../views/certification2.vue'

export default {
    name: 'certificationtotal2',

    components: {
        Sidebar,
        certification2
    },
};
</script>   

<style scoped>
.v-application--wrap {
    min-height: 0px;
}

#app {}

.product-container {
    display: grid;
    grid-template-columns: 1fr 10fr;
    margin-left: 10px;
    margin-right: 10px
}

.navbar {
    grid-column: 1;

}

v-main {
    padding: 0p;
}

.product_details {
    grid-column: 2;
    margin-top: 4rem;

}

@media (max-width: 500px) {}
</style>
