
<template>
<div id="app">
    <v-app>
        <v-app-bar app dense flat color="transparent">
            <img class="mr-6" :src="require('../assets/sidd.jpg')" height="60" />
            <v-toolbar-title class="pl-4">
                Kaas
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-text-field hide-details append-icon="mdi-magnify" class="shrink mr-3" filled rounded dense single-line>
            </v-text-field>
            <img class="mr-3" :src="require('../assets/png.png')" height="40" />

        </v-app-bar>
        <v-main  class="class7">
            <v-container fluid>
                <v-row no-gutters>
                    <v-col cols="2">

                        <v-navigation-drawer style="margin: 0px;" class="navigation-drawer-custom-padding" flat floating permanent>
                            <template>
                                <v-card flat max-width="400">
                                    <v-list two-line>
                                        <template v-for="(item, index) in items">
                                            <v-list-item-group>
                                                <v-subheader v-if="item.header" :key="item.header">
                                                    {{ item.header }}
                                                </v-subheader>

                                                <v-divider v-else-if="item.divider" :key="index"></v-divider>

                                                <v-list-item v-else :key="item.title" ripple :class="{ 'selected': item.title === selectedTitle,rounded:true }" @click="selectTitle(item.title)">
                                                    <v-list-item-avatar v-if="item.avatar">
                                                        <img :src="item.avatar">
                                                    </v-list-item-avatar>
                                                    <v-list-item-content>
                                                        <v-list-item-title v-html="item.title"></v-list-item-title>
                                                    </v-list-item-content>
                                                </v-list-item>
                                            </v-list-item-group>
                                        </template>
                                    </v-list>
                                </v-card>
                            </template>

                        </v-navigation-drawer>
                    </v-col>
                    <v-col cols="10">
                        <v-card class="pa-1" dense flat>
                            <div class="title-header">
                                <h2 class="padd">Pending Application:</h2>
                                <v-btn color="red" class="select-all-btn" @click="selectAll">Select All</v-btn>
                            </div>
                            <hr class="claa">
                            <v-data-table class="custom-table custom-table-size no-lines " :headers="headers" :items="dataTableItems" item-key="name" show-select>
                                <template v-slot:item.data-table-select="{ item }">
                                    <v-checkbox v-model="item.checkbox"></v-checkbox>

                                </template>
                                <template v-slot:header.checkbox="{ header }">
                                    <span class="first-row">{{ header.text }}</span>
                                </template>

                                <!-- similarly for other columns -->

                                <template class="class5" v-slot:item.action="{ item }">
                                    <v-icon small class="mr-2" @click="editItem(item)">
                                        mdi-pencil
                                    </v-icon>
                                    <v-icon small @click="deleteItem(item)">
                                        mdi-delete
                                    </v-icon>
                                </template>
                                <template class="class6" v-slot:item.img="{ item }">
                                    <img :src="item.img" width="80">
                                </template>
                                <template v-slot:item.thumb_nail="{ item }">
                                    <img :src="item.thumb_nail" width="100">
                                </template>
                            </v-data-table>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</div>
</template>

<style scoped>
.class7{
    width:100%
}
.pa-1 {
    margin-top: 40px;
}

.title-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.select-all-btn {
    border-radius: 5px;
}

.class5 {
    font-size: small;

}

.class6 {
    font-size: small;

}

.shrink {
    margin-top: 20px;
}

.mr-3 {
    margin-top: 20px;
}

.mr-6 {
    margin-top: 20px;
}

.pl-4 {
    margin-top: 20px;
    font-weight: 400;
    font-size: xx-large;
}

.claa {
    margin-top: 20px;
    margin-left: 47px;
}

.padd {
    margin-bottom: 0px;
    margin-left: 45px;
    font-family: default;
    font-weight: 400;
}
.container {
    margin:0px;
    padding:0px;
}
.mr-6 {
    padding-top: 3px;
}

.rounded {
    border-top-right-radius: 60px !important;
    border-bottom-right-radius: 60px !important;

}

.first-row-large .v-data-table-header {
    font-size: 1.2rem;
}

.selected {
    background-image: linear-gradient(to right, #e14848, #ff0000) !important;
    color: white !important;
    height: 20px;
}

.navigation-drawer-custom-padding {
    padding-top: 20px;
    margin-left: -6px;
    font-family:default;

}

.list {
    margin-left: 10px;
}

.title {
    font-weight: lighter;
}

.custom-table {
    margin-left: 50px;
    margin-top: 5px;
    margin-right: 0px;
    box-shadow: 0 0 10px 0 rgba(9, 9, 9, 0.2);
    background-color: rgba(244, 245, 250, 255);
    font-weight: 400;
    font-size: xx-small;

}

.first-row {
    font-weight: bold !important;
    font-size: larger !important;
}
</style>

<script>
import axios from "axios"

export default {
    name: 'HelloWorld',

    components: {

    },

    data: () => ({
        selectedTitle: null,
        dataTableItems: [],
        headers: [{
                text: 'Checkbox',
                value: 'data-table-select',
                selectable: true,
                class: 'first-row',

            },
            {
                text: 'ID',
                value: 'id'

            },
            {
                text: 'Title',
                value: 'title'
            },
            {
                text: 'Author',
                value: 'author'
            },
            {
                text: 'Is Paid',
                value: 'is_paid'
            },

            {
                text: 'Image',
                value: 'img'
            },
            {
                text: 'Category ID',
                value: 'category_id'
            },

            {
                text: 'Price',
                value: 'price'
            },
            {
                text: 'Source',
                value: 'source'
            },
            {
                text: 'Thumbnail',
                value: 'thumb_nail'
            },
            {
                text: 'Download Path',
                value: 'download_path'
            },

            {
                text: 'Actions',
                value: 'action'
            },

        ],
        items: [{
                avatar: 'https://picsum.photos/250/300?image=821',
                title: 'Dashboard',
            },
            {
                header: 'Kyc Application  ',
            },
            {
                divider: true
            },
            {
                avatar: 'https://picsum.photos/250/300?image=660',
                title: 'Approved Application',
            },
            {
                avatar: 'https://picsum.photos/250/300?image=821',
                title: 'Pending Application<span class="text-grey-lighten-1"></span>',
            },
            {
                avatar: 'https://picsum.photos/250/300?image=783',
                title: 'Rejected Application<span class="text-grey-lighten-1"></span>',
            },
            {
                header: 'Kyc Compliant App',
            },
            {
                divider: true
            },
            {
                avatar: 'https://picsum.photos/250/300?image=1006',
                title: 'Kyc Complaint App',
            },

            {
                header: 'Setting',
            },
            {
                divider: true
            },
            {
                avatar: 'https://picsum.photos/250/300?image=1008',
                title: 'Configuration Setting',
            },

        ],
    }),
    methods: {
        selectAll() {
            this.dataTableItems = this.dataTableItems.map(item => ({
                ...item,
                checkbox: true
            }));
        },
        selectTitle(title) {
            this.selectedTitle = title;
        },
        editItem(item) {

        },
        deleteItem(item) {

        }

    },
    async mounted() {
        let result = await axios.get("https://www.rrtutors.com/assets/test.json");
        console.warn("api data ", result.data.booklist);
        this.dataTableItems = result.data.booklist.map(book => ({
            ...book,
            checkbox: false
        }));
    }

}

;
</script>
