<template>
<v-app class="app">
    <div class="header">
        <h3 style="font-size: 25px; color: #17a2b8;">Irrigation System</h3>
        <v-btn class="headerrrr">
            <v-icon>mdi-headset</v-icon>{{ $t("project.Support") }}
        </v-btn>
    </div>

    <div class="headline">

        <v-col class="box">
            <div class="header">
                <h5>{{ $t("project.Total Members") }}</h5>
                <v-title>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-title>
            </div>
            <div class="Number">
                <h2 class="digit">2,420$</h2>
                <div class="arow">
                    <v-icon size="36" color="green">mdi-arrow-up</v-icon>
                    <p style="text-align: center;" color="green">+240</p>
                </div>
            </div>

        </v-col>
        <v-col class="box">
            <div class="header">
                <h5>{{ $t("project.Total Budgets") }}</h5>
                <v-title>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-title>
            </div>
            <div class="Number">
                <h2 class="digit">3824$</h2>
                <div class="arow">
                    <v-icon size="36" color="green">mdi-arrow-up</v-icon>
                    <p style="text-align: center;" color="green">+140$</p>
                </div>
            </div>

        </v-col>
        <v-col class="box">
            <div class="header">
                <h5>{{ $t("project.Expected Revenue") }}</h5>
                <v-title>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-title>
            </div>
            <div class="Number">
                <h2 class="digit">4000$</h2>
                <div class="arow">
                    <v-icon size="36" color="green">mdi-arrow-up</v-icon>
                    <p style="text-align: center;" color="green">+1000$</p>
                </div>
            </div>

        </v-col>

        <v-col class="box">
            <div class="header">
                <h5>{{ $t("project.Current Revenue") }}</h5>
                <v-title>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-title>
            </div>
            <div class="Number">
                <h2 class="digit">2680$</h2>
                <div class="arow">
                    <v-icon size="36" color="red">mdi-arrow-down</v-icon>
                    <p style="text-align: center; color: #ff0000b0;">-900$</p>
                </div>
            </div>

        </v-col>

    </div>

    <div class="main">

        <div class="gantt_chat">

            <div class="container">
                <div id="stacked-column-chart"></div>
            </div>

        </div>
        <div class="pie_chat">

            <v-title class="chart_heading">{{ $t("project.Completion Status") }}</v-title>

            <v-col class="table1" style="position: relative; width: 100%; height: 100%;  display: flex; justify-content: center; align-items: center;">
                <div id="pie-chart"></div>
                <span class="centered-percentage">78%</span>
            </v-col>

        </div>

    </div>
    <div class="footer">
        <Map />
    </div>
    <div class="">
        <page6 />

    </div>

</v-app>
</template>

<script>
import page6 from '../views/page6.vue'
import ApexCharts from 'apexcharts';
import Map from './Map.vue';

export default {
    name: 'page14',
    components: {
       page6,
        Map

    },
    data() {
        return {

            selectedDate: null,
            attributes: {
                // Additional attributes for the calendar can be set here
            },

            selectedYear: 2023,
            years: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]
        };

    },
    mounted() {
        this.renderStackedColumnChart();
        this.renderPieChart();
    },
    methods: {
        renderStackedColumnChart() {
            var options = {
                series: [{
                        name: "Complete day",
                        data: [140, 20, 180, 100, 160, 190, 132, 175, 99, 60],
                        fill: {
                            type: 'gradient',
                            gradient: {
                                shade: 'light',
                                type: 'vertical',
                                shadeIntensity: 0.5,
                                gradientToColors: ['#50B81C', '#7CFC00'],
                                inverseColors: true,
                                opacityFrom: 1,
                                opacityTo: 1,
                            },
                        },
                    },

                    {
                        name: "Remaining days",
                        data: [60, 180, 20, 100, 40, 10, 68, 25, 101, 140]
                    },
                ],
                chart: {
                    type: 'bar',
                    stacked: true,
                    height: '400px',
                    toolbar: {
                        show: false,
                    },
                },
                title: {
                    text: 'Project status',
                    align: 'center',
                    margin: 20,
                    style: {
                        fontSize: '20px',
                        color: 'rgba(91, 87, 87, 0.8)'
                    }
                },
                plotOptions: {
                    bar: {
                        columnWidth: '40%',
                        dataLabels: {
                            position: 'top'
                        }
                    }
                },
                colors: ['#008000', '#7CFC00'],
                dataLabels: {
                    enabled: true,
                    offsetY: -20,
                    style: {
                        fontSize: '12px',
                        colors: ['#303030']
                    }
                },
                xaxis: {
                    categories: ['Task1', 'Task 2', 'Task 3', 'Task 4', 'Task 5', 'Task 6', 'Task 7', 'Task 8', 'Task 9', 'Task 10'],
                    position: 'bottom',
                    labels: {
                        style: {
                            colors: ['#9AA0A6'],
                            fontSize: '14px'
                        }
                    },
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    }
                },
                yaxis: {
                    opposite: true,
                    labels: {
                        style: {
                            colors: ['#9AA0A6'],
                            fontSize: '14px'
                        }
                    },
                    axisBorder: {
                        show: false
                    }
                },
                tooltip: {
                    theme: 'dark',
                    y: {
                        title: {
                            formatter: function () {
                                return 'Production'
                            }
                        }
                    }
                },
                grid: {
                    borderColor: '#e0e0e0',
                    strokeDashArray: 5,
                },
            };

            var stackedColumnChart = new ApexCharts(document.querySelector("#stacked-column-chart"), options);
            stackedColumnChart.render();
        },
        renderPieChart() {
            var options = {
                series: [281, 79],
                chart: {
                    type: 'donut',
                    height: '300px',

                },
                labels: ['Wheat', 'Rice'],
                title: {

                    align: 'center',
                    margin: 20,
                    style: {
                        fontSize: '20px',
                        color: 'rgba(91, 87, 87, 0.8)',
                    },
                },
                legend: {
                    show: false,
                    fontSize: '14px',
                    position: 'bottom',
                    horizontalAlign: 'center',
                },
                dataLabels: {
                    enabled: false,
                },
                colors: ['#32CD32', 'black'],
            };

            var pieChart = new ApexCharts(document.querySelector("#pie-chart"), options);
            pieChart.render();
        }
    }
}
</script>

<style scoped>
.app {
    margin: 1rem;
    font-family: 'Neo', sans-serif;
}

.header {
    display: flex;
    justify-content: space-between;
}

.headline {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: row;
}

.header {
    display: flex;
    justify-content: space-between;
    color: rgb(91, 87, 87);
}

.Number {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
}

.arow {

    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
}

.box {
    width: 24.5%;
    margin: 5px;
    background-color: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 10px;
    color: rgba(91, 87, 87, 0.8);
}

.arow p {
    margin-top: 10px;
    color: green;
}

@media (max-width: 950px) {

    .headline,
    .main {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
    }

    .box {
        width: 100%;

    }

    .gantt_chat,
    .pie_chat {
        width: 100%;
    }

}

.main {
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
    margin-bottom: 1rem;
}

@media (max-width:768px) {
    .main {
        display: flex;
        flex-direction: column;

    }
}

.pie_chat {
    width: 30%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-color: #ffffff;
    text-align: center;
    border-radius: 10px;
    margin: 5px;
}

.gantt_chat {
    width: 70%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-color: #ffffff;

    border-radius: 10px;
    margin: 5px;
}

.centered-percentage {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;

    color: #333;

}

@media (max-width:768px) {

    .gantt_chat,
    .pie_chat {
        width: 100%;

    }
}

.chart_heading {
    font-size: 20px;

    margin-top: 20px;
    padding: 10px;
}

.my-datepicker {
    height: 900px;
    width: 100%;
}

.container_page15 {
    padding: 5px;
    height: 60vh;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-color: #ffffff;

}

.footer {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-color: #ffffff;

    border-radius: 10px;
    margin: 5px;

}

.headerrrr {
    color: rgba(0, 64, 255, 0.764);
    background-color: blue;
}

.digit {
    color: rgba(91, 87, 87, 0.736);
    font-size: 26px;

}

.headline {
    display: flex;
    justify-content: space-between;

}

.box {
    flex: 1;
    padding: 20px;
    background-color: #ffffff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.429);
    border-radius: 10px;

    flex-direction: column;
    align-items: center;
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
    transform: translateY(0);
}

.box:hover {
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
    transform: translateY(-5px);
    background-color: #f6f6f6;
    /* Slight change in background on hover */
}

.header {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.Number {
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 20px;
}

.digit {
    font-weight: bold;
    font-size: 24px;
}

.arrow {
    display: flex;
    align-items: center;
    gap: 5px;
}

.arrow-green>p,
.arrow-green v-icon {
    color: green;
}

.arrow-red>p,
.arrow-red v-icon {
    color: red;
}

.arrow p {
    font-weight: bold;
}
</style>
