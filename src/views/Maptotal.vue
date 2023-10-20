<template>
    <div class="maap-container">

   
    <Sidebar/>
   <div class="fixed-demo">
                <Maap />
                </div>
     </div>
  
</template>
<script>
import Sidebar from './Sidebar.vue';
import Maap from './Maap.vue'
export default {
    name: 'Maptotal',
    components: {
        Sidebar,
     Maap
    },

}
</script>
<style>

.fixed-demo {
    position: fixed;
    top: 0;
    margin-top: 4rem;
    left: 0;
    width: 100%;
    height: calc(100vh - 4rem); /* take the full viewport height minus the margin */
    z-index: 100;
}
/* Your existing styles */

@media (min-width: 768px) and (max-width: 1024px) {
    .fixed-demo {
        height: 100%; /* Take full viewport height on tab screens */
        margin-top: 15px; /* Reset margin-top to ensure full height */
    }
}

</style>