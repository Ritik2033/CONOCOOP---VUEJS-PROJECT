<template>
<div class="main">
    <v-col style="margin-top: -15px;">
        <v-title class="dashboard">{{ $t("Dashboard") }}</v-title>
    </v-col>
    <v-col style="margin-top: -30px;">
        <div class="A">

            <div class="card2 part1">

                <v-col class="Weather">
                    <v-title>{{ $t("Disease Analytics") }}</v-title>
                </v-col>
                <v-col class="chart" style="margin-top: -20px;">
                    <apexchart class="apexchart" type="area" :options="chartOptions" :series="series" height="300">
                    </apexchart>
                </v-col>

            </div>

            <div class="card2 part2">

                <v-col>
                    <v-titile class="Weather">{{ $t("Weather") }}</v-titile>
                </v-col>
                <v-col style="margin-top: -20px;">
                    <v-row class="image">
                        <v-col cols="3">
                            <v-img class="weatherimage" width="100" heigth="100" src="../assets/Wh6.webp"></v-img>
                        </v-col>

                        <v-col cols="9">
                            <v-col>
                                <v-col>
                                    <v-title>{{ $t("Today") }} | <span>24 jun 2023</span></v-title>
                                </v-col>
                                <v-col style="margin-top: -10px;">
                                    <v-title class="temp">24° C <span style="font-size: 18px; font-weight: lighter;">{{ $t("PartlyCloudy")}}</span></v-title>
                                </v-col>

                            </v-col>
                        </v-col>

                    </v-row>

                </v-col>
                <v-col class="day_sev" style="margin-top: -20px;"> {{ $t("7 Day Weather") }}</v-col>
                <v-col class="days_card">
                    <v-row class="day_sev_card">
                        <div class="scrollable-container">

                            <v-col class="day">
                                <v-img width="60" heigth="60" src="../assets/wh5.png"></v-img>
                                <div>
                                    <v-titile>28° 32'</v-titile>
                                </div>
                                <div>
                                    <v-titile>{{ $t("Mon") }}</v-titile>
                                </div>
                            </v-col>
                            <v-col class="day">
                                <v-img width="60" heigth="60" src="../assets/wh7.jpg"></v-img>
                                <div>
                                    <v-titile>28° 32'</v-titile>
                                </div>
                                <div>
                                    <v-titile>{{ $t("Tue") }}</v-titile>
                                </div>
                            </v-col>
                            <v-col class="day">
                                <v-img width="60" heigth="60" src="../assets/Wh6.webp"></v-img>
                                <div>
                                    <v-titile>28° 32'</v-titile>
                                </div>
                                <div>
                                    <v-titile>{{ $t("Wen") }}</v-titile>
                                </div>
                            </v-col>
                            <v-col class="day">
                                <v-img width="60" heigth="60" src="../assets/wh5.png"></v-img>
                                <div>
                                    <v-titile>28° 32'</v-titile>
                                </div>
                                <div>
                                    <v-titile>{{ $t("Thu") }}</v-titile>
                                </div>
                            </v-col>
                            <v-col class="day">
                                <v-img width="60" heigth="60" src="../assets/wh7.jpg"></v-img>
                                <div>
                                    <v-titile>28° 32'</v-titile>
                                </div>
                                <div>
                                    <v-titile>{{ $t("Fri") }}</v-titile>
                                </div>
                            </v-col>
                            <v-col class="day">
                                <v-img width="60" heigth="60" src="../assets/Wh6.webp"></v-img>
                                <div>
                                    <v-titile>28° 32'</v-titile>
                                </div>
                                <div>
                                    <v-titile>{{ $t("Sat") }}</v-titile>
                                </div>
                            </v-col>
                            <v-col class="day">
                                <v-img width="60" heigth="60" src="../assets/wh5.png"></v-img>
                                <div>
                                    <v-titile>28° 32'</v-titile>
                                </div>
                                <div>
                                    <v-titile>{{ $t("Sun") }}</v-titile>
                                </div>
                            </v-col>

                        </div>

                    </v-row>

                </v-col>

            </div>

        </div>

    </v-col>

    <div class="partc">

        <div class="data1">

            <v-col class="table1">
                <v-title class="heading">{{ $t("Hardware Devices") }}</v-title>
                <v-title class="paraghraph">{{ $t("View All") }}</v-title>
            </v-col>
            <v-divider></v-divider>
            <v-col class="table1">
                <v-title class="table3" >{{ $t("Pest Analytics") }}</v-title>
                <v-title class="currentyactive">{{ $t("Currently Active") }}</v-title>
            </v-col>
            <v-divider></v-divider>
            <v-col class="table1">
                <v-title class="table3">{{ $t("Moisture Tester") }}</v-title>
                <v-title class="currentyactive">{{ $t("Currently Active") }}</v-title>
            </v-col>
            <v-divider></v-divider>
            <v-col class="table1">
                <v-title class="table3">{{ $t("Temperature Device") }}</v-title>
                <v-title class="currentynotactive">{{ $t("Currently Not Active") }}</v-title>
            </v-col>
            <v-divider></v-divider>
            <v-col class="table1">
                <v-title class="table3">{{ $t("Disease Analytics Device") }}</v-title>
                <v-title class="currentyactive">{{ $t("Currently Active") }}</v-title>
            </v-col>

        </div>

        <div class="data1">

            <v-col class="table1">
                <v-title class="heading">{{ $t("Crop Details") }}</v-title>
                <v-title class="paraghraph">{{ $t("View All") }}</v-title>
            </v-col>
            <v-divider></v-divider>
            <v-col class="table1">
                <v-title class="table3" >{{ $t("Potato") }}</v-title>
                <v-title>1 {{ $t("Acre") }}</v-title>
            </v-col>
            <v-divider></v-divider>
            <v-col class="table1">
                <v-title class="table3">{{ $t("Ginger") }}</v-title>
                <v-title>0.5 {{ $t("Acre") }}</v-title>
            </v-col>
            <v-divider></v-divider>
            <v-col class="table1">
                <v-title class="table3">{{ $t("Onion") }}</v-title>
                <v-title>2 {{ $t("Acre") }}</v-title>
            </v-col>
            <v-divider></v-divider>
            <v-col class="table1">
                <v-title class="table3">{{ $t("Tomato") }}</v-title>
                <v-title>0.8 {{ $t("Acre") }}</v-title>
            </v-col>

        </div>

        <div class="data1">

            <v-col class="table1">
                <v-title class="heading">{{ $t("Geofenced Area") }}</v-title>
            </v-col>
            <v-divider></v-divider>
            <v-col>
                <v-img color src="../assets/land.png" height="250"></v-img>
            </v-col>

        </div>

    </div>

</div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';
export default {
    name: 'Farm2',
    components: {
        apexchart: VueApexCharts,
    },
    data() {
        return {
            chartOptions: {
                chart: {
                    type: 'area',
                    width: '100%',
                    zoom: {
                        enabled: false,
                    },
                    menu: {
                        enabled: false,
                    },
                    toolbar: {
                        show: false,
                    },
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
                },

                fill: {
                    colors: ['#b3e1bc'],
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    curve: 'smooth',
                    colors: ['#79c589'],
                },
            },
            series: [{
                name: 'Temperature',
                data: [30, 45, 35, 48, 45],
            }, ],
        };
    },
}
</script>

<style scoped>
.partc {
    display: flex;
    justify-content: space-between;
}

.main {
    font-family: 'Neo', sans-serif;
}

.chart {
    width: 100%;
    height: 100%;
}

.days_card {
    align-items: center;
}

.day_sev {
    font-size: 20px;
}

.temp {
    font-weight: bold;
    font-size: 20px;
}

.Weather {
    font-size: 20px;
}

.card2 {
    background-color: #eeffef;
    border-radius: 10px;
    max-height: 350px;

    margin: 1rem;
    cursor: pointer;

}

.table1 {
    display: flex;
    justify-content: space-between;
    margin: 0.5rem;
 
    cursor: pointer;

}

.data1 {

    border-radius: 10px;
    background-color: #eeffef;
    height: 350px;

}   

.heading {
    font-size: 18px;
    font-weight: bold;
}

.paraghraph {
    color: rgba(0, 0, 255, 0.695);
    text-decoration: underline;
    font-weight: bold;
}

.currentyactive {
    color: green;
    font-size: 17px;
}

.currentynotactive {
    color: red;
    font-size: 17px;
}



.data1 {
    max-height: 400px;
    width: 30%;
    margin: 1rem;
}

.dashboard {
    font-size: 25px;
    margin-left: 1rem;
}

.day {
    text-align: center;
}

.A {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

}

.part1 {
    width: 65%;
}

.part2 {
    width: 30%;
}

.scrollable-container {
    display: flex;
    flex-direction: row;
    overflow-x: scroll;

}

.scrollable-container::-webkit-scrollbar {
    width: 2px;

}

.scrollable-container::-webkit-scrollbar-track {
    background: #eeffef;

}

.scrollable-container::-webkit-scrollbar-thumb {
    background: #eeffef;

    border-radius: 10px;

}

.scrollable-container::-webkit-scrollbar-thumb:hover {
    background: #555;

}

.chart {
    width: 100%;

}

.partc {
    margin-top: -10px;
}

.weatherimage {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

@media (max-width:768px) {

    .A,
    .partc {
        display: flex;
        flex-direction: column;

    }

    .part1,
    .part2,
    .data1 {
        width: 100%;
    }
}
.table3{
    font-weight: bold;
    color: rgb(91, 87, 87);
}
</style>
