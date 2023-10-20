<template>
    <div class="data child">
        <div class="heading2">
            <h1>{{ $t('id3') }}</h1>

            <v-btn class="btn">
                <v-icon color="white" size="24">mdi-arrow-down</v-icon>Download
                Report
            </v-btn>

        </div>
        <hr class="class3">
       <div class="table-container">
            <table class="table">
                <tr class="heading">
                    <th class="heading">{{ $t('ID') }}</th>
                    <th class="heading">{{ $t('AGRICULTORA') }}</th>
                    <th class="heading">{{ $t('PRODUCTORA') }}</th>
                    <th class="heading">{{ $t('CARACTERÍSTICAS') }}</th>
                    <th class="heading">{{ $t('ÁREA') }}</th>
                    <th class="heading">{{ $t('CREADO EN') }}</th>
                    <th class="heading">{{ $t('UBICACIÓN') }}</th>

                </tr>
                <tr>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                </tr>
                <tr class="head">

                    <td class="head">510</td>
                    <td mailto:class="head">rohit@gmail.com</td>
                    <td class="head">9870123456</td>
                    <td class="head hover-effect" style="text-decoration: underline black;" @click="graph">{{ $t('crop_adviser') }}</td>
                    <td class="head">2.5 {{ $t('hectarea') }}</td>
                    <td class="head interactive-cell" @click="navigateToMap">
                        <i class="fas fa-ellipsis-v"></i>
                    </td>
                    <td class="head interactive-cell" @click="goToScreen4">
                        <v-icon size="24" color=#008000>mdi-map-marker</v-icon>
                    </td>

                </tr>

                <tr>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                </tr>
                <tr class="head">

                    <td class="head">511</td>
                    <td mailto:class="head">pqr@gmail.com</td>
                    <td class="head">8701234569</td>
                    <td class="head hover-effect" style="text-decoration: underline black;" @click="graph">{{ $t('prof_agronomist') }}</td>

                    <td class="head">5.0 {{ $t('hectarea') }}</td>
                   <td class="head interactive-cell" @click="navigateToMap">
                            <i class="fas fa-ellipsis-v"></i>
                        </td>
                        <td class="head interactive-cell" @click="goToScreen4">
                            <v-icon size="24" color=#008000>mdi-map-marker</v-icon>
                        </td>
                </tr>

                <tr>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                </tr>
                <tr class="head">

                    <td class="head">512</td>
                    <td mailto:class="head">xyz@gmail.com</td>
                    <td class="head">8701234569</td>
                    <td class="head hover-effect" style="text-decoration: underline black;" @click="graph">{{ $t('agri_consultant') }}</td>

                    <td class="head">3.4{{ $t('hectarea') }}</td>
                    <td class="head interactive-cell" @click="navigateToMap">
                            <i class="fas fa-ellipsis-v"></i>
                        </td>
                        <td class="head interactive-cell" @click="goToScreen4">
                            <v-icon size="24" color=#008000>mdi-map-marker</v-icon>
                        </td>
                </tr>

                <tr>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                </tr>
                <tr class="head">

                    <td class="head">513</td>
                    <td mailto:class="head">ram@gmail.com</td>
                    <td class="head">8701234569</td>
                    <td class="head hover-effect" style="text-decoration: underline black;" @click="graph">{{ $t('horticulturist') }}</td>

                    <td class="head">4.2 {{ $t('hectarea') }}</td>
                   <td class="head interactive-cell" @click="navigateToMap">
                            <i class="fas fa-ellipsis-v"></i>
                        </td>
                        <td class="head interactive-cell" @click="goToScreen4">
                            <v-icon size="24" color=#008000>mdi-map-marker</v-icon>
                        </td>
                </tr>

                <tr>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                </tr>
                <tr class="head">

                    <td class="head">514</td>
                    <td mailto:class="head">sham@gmail.com</td>
                    <td class="head">8701234569</td>
                    <td class="head hover-effect" style="text-decoration: underline black;" @click="graph">{{ $t('irrigation_designer') }}</td>

                    <td class="head">1.2 {{ $t('hectarea') }}</td>
                    <td class="head interactive-cell" @click="navigateToMap">
                            <i class="fas fa-ellipsis-v"></i>
                        </td>
                        <td class="head interactive-cell" @click="goToScreen4">
                            <v-icon size="24" color=#008000>mdi-map-marker</v-icon>
                        </td>
                </tr>

                <tr>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                </tr>
                <tr class="head">

                    <td class="head">515</td>
                    <td mailto:class="head">tghjk@gmail.com</td>
                    <td class="head">8701234569</td>
                    <td class="head hover-effect" style="text-decoration: underline black;" @click="graph">{{ $t('organic_inspector') }}</td>

                    <td class="head">1.9 {{ $t('hectarea') }}</td>
                   <td class="head interactive-cell" @click="navigateToMap">
                            <i class="fas fa-ellipsis-v"></i>
                        </td>
                        <td class="head interactive-cell" @click="goToScreen4">
                            <v-icon size="24" color=#008000>mdi-map-marker</v-icon>
                        </td>
                </tr>

                <tr>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                </tr>
                <tr class="head">

                    <td class="head">516</td>
                    <td mailto:class="head">rot@gmail.com</td>
                    <td class="head">8701234569</td>
                    <td class="head hover-effect" style="text-decoration: underline black;" @click="graph">{{ $t('crop_adviser') }}</td>

                    <td class="head">3.9 {{ $t('hectarea') }}</td>
                    <td class="head interactive-cell" @click="navigateToMap">
                            <i class="fas fa-ellipsis-v"></i>
                        </td>
                        <td class="head interactive-cell" @click="goToScreen4">
                            <v-icon size="24" color=#008000>mdi-map-marker</v-icon>
                        </td>
                </tr>

                <tr>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                </tr>
                <tr class="head">

                    <td class="head">517</td>
                    <td mailto:class="head">rot@gmail.com</td>
                    <td class="head">8701234569</td>
                    <td class="head hover-effect" style="text-decoration: underline black;" @click="graph">{{ $t('prof_agronomist') }}</td>

                    <td class="head">4.8 {{ $t('hectarea') }}</td>
                   <td class="head interactive-cell" @click="navigateToMap">
                            <i class="fas fa-ellipsis-v"></i>
                        </td>
                        <td class="head interactive-cell" @click="goToScreen4">
                            <v-icon size="24" color=#008000>mdi-map-marker</v-icon>
                        </td>
                </tr>

                <tr>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                    <td>
                        <v-divider></v-divider>
                    </td>
                </tr>
                <tr class="head">

                    <td class="head">518</td>
                    <td mailto:class="head">abc@gmail.com</td>
                    <td class="head">7701234569</td>
                    <td class="head hover-effect" style="text-decoration: underline black;" @click="graph">{{ $t('aquaculture_prof') }}</td>

                    <td class="head">3.6 {{ $t('hectarea') }}</td>
                    <td class="head interactive-cell" @click="navigateToMap">
                            <i class="fas fa-ellipsis-v"></i>
                        </td>
                        <td class="head interactive-cell" @click="goToScreen4">
                            <v-icon size="24" color=#008000>mdi-map-marker</v-icon>
                        </td>
                </tr>

            </table>

        </div>
        <div class="pageination">
            <v-pagination :length="6"></v-pagination>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

export default {
    name: 'page7',
    data() {
        return {

        };
    },
    methods: {
        goToScreen4() {
            this.$router.push({
                name: 'Maptotal'
            });
        },
        navigateToMap() {
            this.$router.push({ name: 'Screen4' });
        },
         graph() {
            this.$router.push({ name: 'line2' });
        }
    }

};
</script>

<style scoped>
.data {
    font-family: 'Neo', sans-serif;

}

.head {
    font-weight: normal;
}

.class3 {
    margin-top: 1rem;
}

.head {}

.data child .class3 {
    margin-top: 1rem;
}

#id2 {
    font-weight: bold;
}

.data {
    position: relative;
    width: 100%;
    background-color: #f4f5fa;

}

.heading {
    padding: 20px;
    text-align: center;

    color: faint black;
    font-weight: 600;
}

.head {
    font-weight: normal;
    padding: 20px;

}

td {
    margin: 0;
    text-align: center;
}

h1 {
    margin-left: 20px;
    font-size: 20px;
    font-weight: 600;
}

.table-container {
    box-shadow: rgba(89, 88, 88, 0.16) 0px 10px 36px 0px, rgba(90, 89, 89, 0.06) 0px 0px 0px 1px;
    overflow-x: auto;
    margin: 1rem;
    background-color: white;
    font-family: 'Neo', sans-serif;
    border-radius: 10px
}

.table {
    width: 100%;
    margin-top: 30px;
    border-collapse: collapse;
}

.pageination {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
}

#id2 {
    font-weight: bold;
    color: rgb(91, 87, 87);
}

.head {
    font-size: large;
    padding: 20px;

    color: rgb(91, 87, 87);

}

.heading {
    padding: 20px;
    text-align: center;

    color: rgb(91, 87, 87);
    font-weight: 600;
}

.heading2 {
    display: flex;
    flex-direction: row;
}

.btn {
    margin-left: auto;

    background: linear-gradient(-60deg, #eeee22, #0e9e01);
    color: #ffffff;

}
.hover-effect:hover {
    color:  black;  
    text-decoration-color: red; 
}
.interactive-cell:hover {
     
    cursor: pointer;
}
</style>
