<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" app class="sidebar my-drawer">
            <div class="logo-container">
                <v-img :src="require('../assets/con2.jpg')" alt="Logo" class="logo"></v-img>
                <div class="status-tick"></div>
            </div>
            <v-list>
                <v-list-item-group v-for="item in items" :key="item.title">

                    <v-list-item :class="{ activeRoute: $route.name === item.route }" @click="navigateTo(item.route)">
                        <v-list-item-icon>
                            <v-icon >{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title class="class3">{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <div v-if="item.title === 'Dashboard'" class="divider-text">
                        <span ID="Id3">KYC Application</span>
                    </div>
                    <div v-if="item.title === 'Rejected Application'" class="divider-text">
                        <span ID="Id3">Product List</span>
                    </div>
                    <div v-if="item.title === 'Product Features'" class="divider-text">
                        <span ID="Id3">Setting</span>
                    </div>

                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar class="app-bar">
            <v-app-bar-nav-icon @click="drawer = !drawer" class="side"></v-app-bar-nav-icon>
            <v-spacer></v-spacer>
            <v-container>
                <v-row justify="end" class="avatar-column">
                    <v-col cols="auto">
                        <v-menu offset-y>
                            <template v-slot:activator="{ on, attrs }">
                                <v-avatar :size="53" v-bind="attrs" v-on="on">
                                    <img src="../assets/png.png" alt="Avatar Image" />
                                </v-avatar>
                            </template>

                            <v-list class="class5">
                                <v-list-item @click="navigateToProfile">
                                    <v-list-item-title>Profile</v-list-item-title>
                                </v-list-item>
                                <v-list-item @click="logout">
                                    <v-list-item-title>Logout</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>

                    </v-col>
                    <v-icon large color="dark green" @click="logout" class="logout-icon">mdi-logout</v-icon>
                </v-row>
            </v-container>

        </v-app-bar>

        <v-main>
            <!-- Your main content goes here -->
        </v-main>
    </v-app>
</template>

<style scoped>
#inspire{
        background-image: url('../assets/blur.jpg');

}
.v-list-item.activeRoute {
    background: rgb(171, 226, 60) !important;
}

.v-list-item.activeRoute .v-list-item__content .v-list-item__title {
    color: white !important;
}

.v-list-item.activeRoute .v-list-item-icon>.v-icon {
    color: white !important;
}

/* For the navigation drawer */
/* Three-color gradient for the navigation drawer */
.my-drawer .v-navigation-drawer {
    background: linear-gradient(to bottom, #FFFF00, #008000, #00FF00);
}

/* ... your existing styles ... */

/* Initially hide the sidebar icon */

#Id3 {
    color: black;
}

.class3 {
    font-family: 'Neo', sans-serif;
    font-weight: 400;
    font-size: large;
   
    /* Add this to make text white */
}

.my-drawer .v-list-item-icon .v-icon {
    color: rgb(232, 231, 231) !important;
}

/* This will remove the sidebar's right border */
.v-navigation-drawer__border {
    display: none !important;
}

/* Enhancements for the sidebar */
.my-drawer .v-navigation-drawer {
    width: 260px;
    /* Adjust the width as per your design */
    padding: 10px 0;
    /* Adding a subtle shadow to give it depth */
}

/* Extra padding for each list item to make them look spacious */

/* Logo enhancements */
.logo-container {
    padding: 20px 0;
    /* An optional line below the logo for better separation */
}

.sidebar {
    overflow-y: visible;

}

.avatar-logout-container {
    display: flex;
    align-items: center;
    gap: 10px;
    /* space between avatar and logout icon */
}

.logout-icon {
    cursor: pointer;
    /* makes it obvious it's clickable */
    transition: transform 0.3s ease;
    /* for hover effect */
}

.logout-icon:hover {
    transform: scale(1.1);
    /* slightly enlarge icon on hover */
}

.v-navigation-drawer>>>.v-navigation-drawer__content {
    overflow-y: visible !important;
    overflow-x: visible !important;
}

.v-navigation-drawer>>>.v-navigation-drawer__border {
    position: relative;
}

.sidebar {
    background-image: url('../assets/blur.jpg');
    overflow-y: auto;

    scrollbar-width: none;

    -ms-overflow-style: none;
    height: 100%;

}

.sidebar::-webkit-scrollbar {
    display: none;
}

.v-navigation-drawer__border {
    width: none !important;
    display: none !important;
}

#inspire {
    background-color: #f4f5fa;
}

.theme--light.v-navigation-drawer:not(.v-navigation-drawer--floating) .v-navigation-drawer__border {
    display: none !important;
}

.v-list-item {
    position: relative;
    transition: all 0.3s ease;
    margin: 20px 0;
    font-family: 'Neo', sans-serif;

}

.v-list-item::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 0;
    background: linear-gradient(to right, #dd6169, #cf252f);
    z-index: -1;
    transition: all 0.3s ease;
}

.v-list-item:hover::before {
    height: 70%;
    transform: translateY(-50%);
}

.v-navigation-drawer__border {
    width: 0px;
}

@media screen and (max-width: 768px) {
    .v-list-item {
        padding: 8px 18px;
    }
}

@media screen and (max-width: 480px) {
    .v-list-item {
        padding: 6px 16px;
    }
}

.v-list-item:hover {
    background: rgb(136, 192, 24) !important;

}

.v-list-item:hover .v-list-item__content .v-list-item__title {
    color: white !important;
}

.v-list-item:hover .v-list-item-icon>.v-icon {
    color: white !important;
}

.divider-text {
    text-align: center;
    position: relative;
    margin-top: 15px;
    margin-bottom: 15px;
    color: rgba(9, 7, 7, 0.3);
}

.divider-text span {
    background-color: #f4f5fa;
    border-radius: 10px;

    padding: 0 10px;
    position: relative;
    z-index: 0;
    color: rgba(0, 0, 0, 0.3);
}

.divider-text:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 10%;
    right: 10%;
    border-top: 1px solid rgba(0, 0, 0, 0.3);
    z-index: 0;
}

.class3 {
    font-family: 'Neo', sans-serif;
    font-weight: 400;
    font-size: large;
}

.logo-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
}

.logo {
    max-width: 45%;
    position: relative;

    margin: auto;
    border-radius: 2%;
}

.sidebar {
    z-index: 999;

}

.avatar-column {
    padding-right: 0 !important;

    margin-right: 0 !important;

}

.theme--light.v-navigation-drawer:not(.v-navigation-drawer--floating) {
    background-color: none !important;
}

.app-bar {
    z-index: 998;
    background-image: url('../assets/blur.jpg');
    position: fixed;
    width: 100%;
    box-shadow: none !important;
}

.side {
    visibility: hidden;

}

@media screen and (max-width: 1270px) {
    .side {
        visibility: visible;
        justify-content: space-between;

    }

}


.v-menu__content {
    border-radius: 5px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.v-list-item {
    cursor: pointer;
}

.v-list-item:hover {
    background-color: #f5f5f5;
    /* a subtle gray */
}
</style>

<script>
import {
    ref
} from 'vue'

const drawer = ref(null)
export default {
    name: 'page12',
    data() {
        return {
            items: [{
                title: 'Dashboard',
                icon: 'mdi-view-dashboard',
                route: 'Dashboard'

            },
            {
                title: 'Approved Application',
                icon: 'mdi-check-circle',
                route: 'ApproveAppli'
            },
            {
                title: 'Pending Application',
                icon: 'mdi-clock',
                route: 'PendingApplication'
            },
            {
                title: 'Rejected Application',
                icon: 'mdi-close-circle',
                route: 'RejectedApplication'
            },
            {
                title: 'Product',
                icon: 'mdi-cube',
                route: 'product'
            },
            {
                title: 'Product Lines',
                icon: 'mdi-format-list-bulleted',
                route: 'Productline'

            },

            {
                title: 'Product Group',
                icon: 'mdi-shape',

            },
            {
                title: 'Product Features',
                icon: 'mdi-star'
            },
            {
                title: 'Configuration Setting',
                icon: 'mdi-cog',
                route: 'Setting'
            }

            ],
            drawer: true
        }
    },
    methods: {
        navigateTo(routeName) {
            if (!routeName) return;

            if (this.$router.currentRoute.name !== routeName) {
                this.$router.push({
                    name: routeName
                })
                    .catch(err => {
                        console.error(err);
                    });
            }
        },
        logout() {

            this.$router.push({
                name: 'Login'
            });
        },

    },
    setup() {
        const drawer = ref(true);

        return {
            drawer
        };
    }
}
</script>
