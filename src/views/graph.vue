<template>
<v-app>
    <v-main>

        <div class="car">
            <!-- Add language switch buttons here -->

            <div class="overview" style="padding-left: 1.5rem;">
                <div class="card-header d-sm-flex d-block border-0 pb-0 flex-wrap">
                    <div class="pr-3 me-auto mb-sm-0 mb-3">
                        <h4 class="fs-20 text-black mb-1">{{ $t('agriculture') }}</h4>

                    </div>
                    <div class="d-flex align-items-center justify-content-between">

                        <v-btn class="btn" @click="menu = !menu">
                            <v-icon color="white" size="24">mdi-arrow-down</v-icon>{{ $t('ppt') }}
                        </v-btn>

                        <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200">
                            <v-list-item-group>
                                <v-list-item @click="download('pdf')">
                                    <v-list-item-icon>
                                        <v-icon>mdi-file-pdf</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title>.pdf</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item @click="download('docx')">
                                    <v-list-item-icon>
                                        <v-icon>mdi-file-word</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title>.docx</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item @click="download('ppt')">
                                    <v-list-item-icon>
                                        <v-icon>mdi-file-powerpoint</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title>.ppt</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-menu>

                    </div>
                </div>
                <div class="chart-container">
                    <apexchart type="bar" :height="chartHeight" :options="chartOptions" :series="series">
                    </apexchart>
                </div>

            </div>

        </div>
        <div class="info-section">
            <h2 :class="class1">{{ $t('farm.title') }}</h2>
            <img src="../assets/farm.jpg" alt="Logo de la granja" class="info-logo">
            <p>
                {{ $t('farm.description') }}
            </p>

        </div>

    </v-main>
</v-app>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';

export default {
    name: 'graph',

    components: {
        apexchart: VueApexCharts,

    },

    data: () => {
        return {
            chartHeight: '600px',
            menu: false,
            series: [{
                name: 'Costo',

                data: [44, 55, 57, 56, 61, 58, 63, ]
            }, {
                name: 'Producto',
                data: [76, 85, 101, 98, 87, 105, 91, ]
            }, ],
            chartOptions: {
                chart: {
                    type: 'bar',
                    height: 350
                },
                grid: {
                    borderColor: '#e7e7e7',
                    row: {
                        colors: ['transparent', 'transparent'], // Alternating transparent
                        opacity: 0.5
                    },
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '55%',
                        endingShape: 'circle'
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                xaxis: {
                    categories: ['Dom/Sun', 'Lun/Mon', 'Mar/Tue', 'MIE/Wed', 'JUE/Thur', 'VIE/Fri', 'Sab/Sat'],
                    axisBorder: {
                        show: true,
                        color: '#bec7ce',
                    },
                    axisTicks: {
                        show: true,
                        color: '#bec7ce',
                    },
                },
                yaxis: {
                    title: {

                    }
                },

                dataLabels: {
                    enabled: false,
                },
                colors: ['#0e9e01', '#eeee22', ],
                fill: {
                    opacity: 1
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return "$ " + val + " thousands"
                        }
                    },
                    theme: 'dark',
                    style: {
                        fontSize: '14px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                    },
                    marker: {
                        fillColors: ['#0e9e01', '#eeee22']
                    }
                },
                responsive: [{
                    breakpoint: 480, // breakpoint at which the settings below will apply
                    options: {
                        chart: {
                            width: '100%',
                            height: 300,

                        }
                    }
                }]
            }
        }
    },
    methods: {
        download(format) {
            // Logic to handle the download for each format
            console.log(`Downloading in ${format} format...`);
            this.menu = false; // Close the dropdown menu after a selection is made
        },

        download(format) {
            console.log(`Downloading in ${format} format...`);
            this.menu = false;
            // ... your existing code ...
        }
    }

}
</script>

<style scoped>
.chart {
    margin-top: 3rem;

}

.card-header {
    margin-top: 1rem;
}

.btn {
    background: linear-gradient(-60deg, #eeee22, #0e9e01);
    color: #ffffff;
    margin: 5px;
}

.overview {
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.car {
    display: flex;
    flex-direction: row;
    padding: 2rem;
}

@media (max-width: 768px) {
    .car {
        flex-direction: column;
    }

    .overview {
        width: 100%;
    }
}

@media (max-width: 440px) {
    .chart {
        height: 250;

    }
}

.btn:hover {
    background: linear-gradient(-60deg, #ccee22, #0ea901);
    transform: translateY(-3px);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

.card-header h4 {
    color: #333;
    font-weight: 600;
}

.card-header span {
    color: #555;
    font-weight: 500;
}

.chart {

    padding: 20px;
    border-radius: 8px;
}

.overview {
    border-radius: 8px;
    overflow: hidden;

}

.chart-container {}

@media (max-width: 768px) {
    .chart-container {
        margin: 0;
    }
}

/* ... existing styles ... */

.info-section {
    max-width: 1200px;
    margin: 20px auto;
    background-color: #f8f8f8;
    border-radius: 8px;
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}

.info-section h2 {
    font-size: 24px;
    color: #333;

}

.info-section p {
    font-size: 16px;
    color: #555;
    line-height: 1.6;
    margin: 20px 0;
}

@media (max-width: 768px) {
    .info-section {
        padding: 15px;
    }

    .info-section h2 {
        font-size: 20px;
    }

    .info-section p {
        font-size: 14px;
    }
}

/* ... existing styles ... */

.info-section {
    padding: 20px;
    background-color: #f7f7f7;
    /* Light gray background */
    color: #333;
    /* Dark text color */
    font-family: 'Arial', sans-serif;
    /* Optional: Change the font family if needed */
}

.info-section h2 {
    color: #0e9e01;
    /* Green color matching your theme */
    font-weight: bold;
    margin-top: 10px;
}

.info-section p {
    color: #555;
    /* Slightly lighter text color for the paragraph */
    font-size: 16px;
    /* Making the text a bit larger */
    line-height: 1.5;
    /* Giving it a nice line-height for readability */
    margin: 20px 0;
    /* Spacing between paragraphs */
}

.info-logo {
    width: 100px;
    height: 100px;
    margin-right: 20px;
    float: left;
    /* To make the image float to the left of the text */
}

.class3 {
    color: rgb(103, 153, 27);
}

.language-switcher {
    text-align: center;
    margin-bottom: 1rem;
}

.language-switcher button {
    margin: 0 0.5rem;
    padding: 0.5rem 1rem;

}
</style>
