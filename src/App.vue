<template>
    <!-- Your App.vue template content here -->
    <RouterView/>
</template>

<script>
export default {
    name: 'App',

    mounted() {
        let link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.getElementsByTagName('head')[0].appendChild(link);
        }
        link.href = require('@/assets/con2.jpg');
    }
}
</script>

<style>
/* Your styles here */
</style>
