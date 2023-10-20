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
                            <v-icon color="white">{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title class="class3">{{ $t('menuItems.' + item.title) }}</v-list-item-title>

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
                                    <v-list-item-title id="ID2" :style="{ color: '#008000' }">Profile</v-list-item-title>
                                </v-list-item>
                                <v-list-item @click="switchLanguage('en')">
                                    <v-list-item-title id="ID2">English</v-list-item-title>
                                </v-list-item>
                                <v-list-item @click="switchLanguage('es')">
                                    <v-list-item-title id="ID2">Español</v-list-item-title>
                                </v-list-item>

                                <v-list-item @click="logout">
                                    <v-list-item-title id="ID2" :style="{ color: '#FF0000' }">Logout</v-list-item-title>
                                </v-list-item>

                            </v-list>
                        </v-menu>

                    </v-col>
                    <v-icon large color="yellow" @click="logout" class="logout-icon">mdi-logout</v-icon>
                </v-row>
            </v-container>

        </v-app-bar>

        <v-main>

        </v-main>
    </v-app>
    </template>

    <style scoped>  
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
        color: white;

    }

    .my-drawer .v-list-item-icon .v-icon {
        color: rgb(232, 231, 231) !important;
    }

    .v-navigation-drawer__border {
        display: none !important;
    }

    .my-drawer .v-navigation-drawer {
        width: 260px;

        padding: 10px 0;

    }

    .logo-container {
        padding: 20px 0;

    }

    .sidebar {
        overflow-y: visible;

    }

    .avatar-logout-container {
        display: flex;
        align-items: center;
        gap: 10px;

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
        background: linear-gradient(to bottom, #FFFF00 0%, #FFFF00 8%, #008000 20%, #299229 100%);
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
        margin-top: 10px;
        margin-bottom: 10px;
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

        position: fixed;
        width: 100%;
        background-color: green !important;
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

    .class5 {
        font-family: 'Roboto', sans-serif;
        background-color: #f4f4f4;
        /* A light grey background */
        border-radius: 10px;
        /* Rounded corners */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        /* A subtle shadow */
        overflow: hidden;
        /* Ensures the border-radius affects inner items */
    }

    .v-list-item {
        cursor: pointer;
        /* Hand cursor on hover for clickable items */
        transition: background-color 0.3s;
        /* Smooth transition */
    }

    .v-list-item:hover {
        background-color: #e0e0e0;
    }

    .v-list-item-title {
        padding: 10px 20px;
        font-weight: 500;
    }

    #ID2 {
        font-weight: bold;
    }
    </style>

    <script>
    import {
        ref
    } from 'vue'

    const drawer = ref(null)
    export default {
        name: 'sidebar',
        data() {
            return {
                items: [{
                    title: 'Hogar',
                    icon: 'mdi-view-dashboard',
                    route: 'Dashboard'
                },
                {
                    title: 'análisis',
                    icon: 'mdi-chart-line',
                    route: 'graphtotal'
                        },  
                  {
                    title: 'Farmers',
                    icon: 'mdi-account',
                    route: 'Farm3total'
                },

              
                {
                    title: 'Project', 
                    icon: 'mdi-shape', 
                    route: 'Farmertotal'
                },
                {
                    title: 'Fincas',
                    icon: 'mdi-clock',
                    route: 'Totaltable1'
                },
                {
                    title: 'Certificación',
                    icon: 'mdi-close-circle',
                    route: 'certificationtotal'
                },
                {
                    title: 'Asociación',
                    icon: 'mdi-cube',
                    route: 'product'
                },
                {
                    title: 'Asociación Líneas',
                    icon: 'mdi-format-list-bulleted',
                    route: 'Productline'
                },
                {
                    title: 'Asociación Grupo',
                    icon: 'mdi-shape',
                    route: 'Productgroup'
                },
                {
                    title: 'Asociación Características',
                    icon: 'mdi-star',
                    route: 'Productfeature'
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
            switchLanguage(language) {
                this.$i18n.locale = language;
            }

        },
        setup() {
            const drawer = ref(true);

            return {
                drawer
            };
        }
    }
    </script>
