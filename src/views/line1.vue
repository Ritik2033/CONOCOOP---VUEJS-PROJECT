<template id="app">
    <v-app>
        <v-main>
            <div class="car">


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

                        <apexchart type="rangeBar" :height="chartHeight" :options="chartOptions" :series="series">
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
    name: 'line1',

    components: {
        apexchart: VueApexCharts,
    },

    data: () => {
        return {
            chartHeight: '600px',
            menu: false,
            series: [
                {
                    name: 'Projects',
                    data: [
                        {
                            x: 'Project 1',
                            y: [
                                new Date('2023-01-01').getTime(),
                                new Date('2023-03-05').getTime(),
                            ],
                        },
                        {
                            x: 'Project 2',
                            y: [
                                new Date('2023-03-06').getTime(),
                                new Date('2023-06-10').getTime(),
                            ],
                        },
                        {
                            x: 'Project 3',
                            y: [
                                new Date('2023-04-11').getTime(),
                                new Date('2023-09-15').getTime(),
                            ],
                        },
                        {
                            x: 'Project 4',
                            y: [
                                new Date('2023-09-11').getTime(),
                                new Date('2023-012-15').getTime(),
                            ],
                        },
                        {
                            x: 'Project 5',
                            y: [
                                new Date('2023-01-11').getTime(),
                                new Date('2023-05-15').getTime(),
                            ],
                        },
                        {
                            x: 'Project 6',
                            y: [
                                new Date('2023-05-11').getTime(),
                                new Date('2023-08-15').getTime(),
                            ],
                        },
                        {
                            x: 'Project 7',
                            y: [
                                new Date('2023-08-01').getTime(),
                                new Date('2023-011-05').getTime(),
                            ],
                        },
                    ],
                },
            ],
            chartOptions: {
                chart: {
                    type: 'rangeBar',
                    height: 350,
                },
                colors: ['#0e9e01'],
                plotOptions: {
                    bar: {
                        horizontal: true,
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                yaxis: {
                    title: {
                     
                        style: {
                            fontSize: '16px', // Increase the font size here
                        },
                    },
                },
                xaxis: {
                    type: 'datetime',
                    labels: {
                        formatter: function (value) {
                            const date = new Date(value);
                            const months = [
                                'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
                            ];
                            return months[date.getMonth()]; // X-axis label
                        },
                    },
                    title: {
                       
                        style: {
                            fontSize: '16px', // Increase the font size here
                        }, // X-axis label
                    },
                },
                fill: {
                    type: 'gradient', // Use gradient fill
                    gradient: {
                        // Define your gradient here
                        shade: 'light',
                        type: 'vertical',
                        shadeIntensity: 0.5,
                        gradientToColors: ['#eeee22', '#0e9e01'], // Replace with your gradient colors
                        inverseColors: false,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 100],
                    },
                },
                tooltip: {
                    x: {
                        format: 'dd/MM/yyyy',
                    },
                },
                // Rest of your chart options...
            },
        };
    },

    methods: {
        download(format) {
            // Logic to handle the download for each format
            console.log(`Downloading in ${format} format...`);
            this.menu = false; // Close the dropdown menu after a selection is made
        },
    },
};
</script>
  

  


    
<style scoped>
.apexcharts-rangebar .apexcharts-bar-area {
    background: linear-gradient(-60deg, #eeee22, #0e9e01);
   
}

#app {
    font-family: 'Neo', sans-serif;
}

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

.chart-container {
    width: 100%;
    font-weight:300;
}

.chart-container {}

@media (max-width: 768px) {
    .chart-container {
        margin: 0;
    }
}

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

 .info-section {
    padding: 20px;
    background-color: #f7f7f7;
    color: #333;
   font-family: 'Arial', sans-serif;
   
}

.info-section h2 {
    color: #0e9e01;
 font-weight: bold;
    margin-top: 10px;
}

.info-section p {
    color: #555;
   font-size: 16px;
   line-height: 1.5;
    margin: 20px 0;
  
}

.info-logo {
    width: 100px;
    height: 100px;
    margin-right: 20px;
    float: left;
   
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
    
