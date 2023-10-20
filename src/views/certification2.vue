<template>
    <v-app>

        <div Class="data">

            <div class="heading2">
                <h1 class="class3">{{ $t('Hello') }}, | Maple
                    <select v-model="selectedYear" class="year-dropdown">
                        <option class="class12" v-for="year in years" :key="year" :value="year">{{ year }}</option>
                    </select>
                </h1>
                <div class="export-container">
                    <button @click="exportToPDF">{{$t("new.Print")}}</button>
                </div>
            </div>
            <v-row class="row">
                <v-col cols="12" sm="4" class="box">
                    <img src="@/assets/leaf.png" alt="Leaf" class="box-image">
                    <div class="class4">
                      <div class="space1">{{ $t('new.Crop Name') }}</div>

                        <p class="space2">
                            Granja de arroz

                        </p>
                    </div>

                </v-col>
                <v-col cols="12" sm="4" class="box">
                    <img src="@/assets/square2.jpg" alt="Leaf" class="box-image">
                    <div class="class4">
                        <div class="space1">{{ $t('new.Area') }}</div>
                        <p class="space2">
                            50 Acrs

                        </p>
                    </div>
                </v-col>
                <v-col cols="12" sm="4" class="box">
                    <img src="@/assets/product.jpg" alt="Leaf" class="box-image">
                    <div class="class4">
                        <div class="space1">{{ $t('new.Last Production') }}</div>
                        <p class="space2">
                            50 {{ $t('message.ton') }}
                        </p>
                    </div>

                </v-col>

            </v-row>
            <div v-if="showModal" class="modal" @click="closeModal">
                <div class="modal-content">
                    <span class="close" @click="showModal = false">&times;</span>
                    <img :src="require(`@/assets/${currentDocument}`)" alt="Document" />
                </div>
            </div>

            <v-row class="class7">

                <v-col cols="12" sm="4" class="first scrollable-content">
                    <v-title class="Crop">Details</v-title>
                    <v-col class="table1">
                        <v-title class="heading">{{$t("new.Documents")}}</v-title>

                        <!-- Added Column -->
                    </v-col>
                    <v-divider></v-divider>
                    <v-col class="table1">
                        <v-title class="table3">Passport</v-title>

                        <a href="#" class="view-link page1" @click.prevent="viewDocument('passport2.png')">View</a>
                        <button @click="downloadDocument('passport2.png')">Download</button>

                        <!-- Added View Link -->
                    </v-col>
                    <v-divider></v-divider>
                    <v-col class="table1">
                        <v-title class="table3">License</v-title>

                        <a href="#" class="view-link page2" @click.prevent="viewDocument('licene.webp')">View</a>
                        <!-- Added View Link -->
                        <button @click="downloadDocument('licene.webp')">Download</button>
                    </v-col>
                    <v-divider></v-divider>
                    <v-col class="table1">
                        <v-title class="table3">Resident</v-title>

                        <a href="#" class="view-link page3" @click.prevent="viewDocument('resident.png')">View</a>
                        <!-- Added View Link -->
                        <button @click="downloadDocument('resident.png')">Download</button>
                    </v-col>
                    <v-divider></v-divider>

                    <v-col class="table1">
                        <v-title class="table3">Signature</v-title>

                        <a href="#" class="view-link page4"
                            @click.prevent="viewDocument('sign.png')">View</a><!-- Added View Link -->
                        <button @click="downloadDocument('sign.png')">Download</button>
                    </v-col>

                </v-col>

                <v-col cols="12" sm="4" class="first">
                    <v-title class="Crop">Outputs</v-title>
                    <v-col class="table1"
                        style="position: relative; width: 100%; height: 100%;  display: flex; justify-content: center; align-items: center;">
                        <div id="pie-chart"></div>
                        <span class="centered-percentage">78%</span>
                    </v-col>
                </v-col>

                <v-col cols="12" sm="4" class="first">
                    <v-title class="Crop">Geofenced Area</v-title>
                    <v-col class="table1">

                        <v-img color src="../assets/land2.png" height="300"></v-img>
                    </v-col>

                </v-col>
            </v-row>
                 <v-row class="class10">
                <div class="container">
                    <div id="stacked-column-chart"></div>
                </div>
            </v-row>

        </div>

    </v-app>
</template>

<script>
import {
    Document,
    Packer,
    Paragraph,
    TextRun
} from "docx";
import jsPDF from "jspdf";
import html2canvas from 'html2canvas';
import ApexCharts from 'apexcharts';

export default {
    name: 'certification2',
    data() {
        return {
            showModal: false,
            currentDocument: '',
            selectedYear: 2023,
            years: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]
        };

    },
    mounted() {
        this.renderStackedColumnChart();

        this.renderPieChart();
    },
    methods: {
        closeModal(event) {
            if (event.target.classList.contains('modal')) {
                this.showModal = false;
            }
        },
        renderStackedColumnChart() {
            var options = {
                series: [
                    {
                        name: "farm1",
                        data: [80, 150, 180, 100, 0, 0, 100, 120, 0, 110],

                    },
                {
                    name: "farm2",
                    data: [120, 160, 0, 100, 100, 200, 0, 110, 0, 190]
                },
                {
                    name: "farm3",
                    data: [100, 0, 0, 100, 100, 0, 100, 100, 185, 90]
                }],
                chart: {
                    type: 'bar',
                    stacked: true,
                    height: '400px',
                    toolbar: {
                        show: false,
                    },
                },
                title: {
                    text: 'Crop Outputs',
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
                colors: ['#008000', '#50C878', '#7CFC00'],  
                dataLabels: {
                    enabled: true,
                    offsetY: -20,
                    style: {
                        fontSize: '12px',
                        colors: ['#303030']
                    }
                },
                xaxis: {
                    categories: ['Wheat', 'Rice', 'potatoes','sorghum', 'soybeans','potatoes','wheat','yams ','Cassava','bananas'],
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
                colors: ['#32CD32', '#ffff00'],
            };

            var pieChart = new ApexCharts(document.querySelector("#pie-chart"), options);
            pieChart.render();
        },
        viewDocument(documentName) {
            this.currentDocument = documentName;
            this.showModal = true;
        },
        async exportToPDF() {
            const content = document.querySelector('.data');

            // This scales the rendered content, which can help with font rendering
            const canvas = await html2canvas(content, {
                scale: 2
            });

            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4'
            });

            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

            // Add the image to the PDF with some margin for better appearance
            pdf.addImage(imgData, 'PNG', 10, 10, pdfWidth - 20, pdfHeight);

            pdf.save("Farm.pdf");
        },
        downloadDocument(documentName) {
            const url = require(`@/assets/${documentName}`);
            const a = document.createElement('a');
            a.href = url;
            a.download = documentName;
            a.click();
        }

    }
}
</script>

<style scoped>
.table1 {
    display: flex;
    justify-content: space-between;
    margin: 0.1rem;

    cursor: pointer;

}

.Crop {
    font-size: 25px;
    font-weight: bold;
    color: rgba(91, 87, 87, 0.8);
    margin-left: 1rem;

}

.heading,
.paraghraph {
    font-size: 20px;
    font-weight: bold;
    color: rgba(91, 87, 87, 0.8);
}

.table3 {
    font-size: 18px;
    font-weight: 300;
    font-size: 20px;
    font-weight: bold;
    color: #362d2d;
}

.view-link {
    font-size: 18px;
    font-weight: 300;
    font-size: 20px;
    font-weight: bold;
    color: rgba(91, 87, 87, 0.8);
}

.view-doc {
    font-size: 20px;
    font-weight: bold;
    color: rgba(91, 87, 87, 0.8);
}

.data {
    font-family: 'Roboto Slab', sans-serif;

}

.data child .class3 {
    margin-top: 1rem;
}

.heading2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    margin-bottom: 2rem;
}

.top-button {
    padding: 0.7rem 2rem;
    background: -webkit-linear-gradient(-60deg, #eeee22, #0e9e01);
    background: linear-gradient(-60deg, #eeee22, #0e9e01);
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 20px;
    transition: background-color 0.3s ease, background 0.3s ease;
}

.top-button:hover {
    background: -webkit-linear-gradient(-60deg, #e2e200, #0c8a00);
    background: linear-gradient(-60deg, #e2e200, #0c8a00);
}

@media screen and (max-width: 768px) {

    .top-button {
        padding: 0.4rem 0.8rem;
        font-size: 0.9rem;
    }
}

.class3 {
    margin-top: 1rem;
    color: rgba(91, 87, 87, 0.8);
}

.box {
    display: flex;
    justify-content: flex-start;

    width: 80px;

    height: 60px;

    box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.1);

    transition: transform 0.3s;
    border-radius: 4px;
    align-items: center;

}

.box-image {

    width: 50px;
    height: 50px
}

.class4 {

    display: flex;

    margin-left: 60px;

}

.space1 {
    color: rgb(0 0 0);
    font-size: larger;
    font-weight: 400;

}

.row {
    justify-content: center;
}

.space2 {
    margin-left: 70px;
    color: rgb(0 0 0 / 75%);
    font-size: larger;
    font-weight: bold;

}

.year-select {
    cursor: pointer;
    text-decoration: underline;

}

.year-dropdown {
    font-size: 0.8em;
    color: rgb(78 197 7 / 79%);
    padding: 5px 30px 5px 10px;

    margin-left: 5px;

    border-radius: 5px;
    appearance: none;

    -webkit-appearance: none;

    -moz-appearance: none;

    background-color: white;
    position: relative;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 320 512"><path d="M31.3 192l121.5 121.5c4.7 4.7 12.3 4.7 17 0L291.3 192c4.7-4.7 4.7-12.3 0-17l-22.6-22.6c-4.7-4.7-12.3-4.7-17 0L160 289.9 68.3 151.5c-4.7-4.7-12.3-4.7-17 0L28.7 174c-4.7 4.7-4.7 12.3 0 17z" fill="black"/></svg>');
    background-repeat: no-repeat;
    background-position: right 10px center;
}

.year-dropdown div {
    padding: 5px;
    cursor: pointer;
}

.year-dropdown div:hover {
    background-color: #e9e9e9;
}

select {
    font-size: 1em;

    padding: 5px 10px;
    margin-left: 5px;

}

.year-dropdown:after {
    content: '▼';

    font-size: 20px;

    position: absolute;
    right: 10px;

    top: 50%;
    transform: translateY(-50%);

    pointer-events: none;

}

.first {

    height: 400px;

}

.second {
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
    height: 400px;
}

.temperature-label {
    text-align: start;
    font-size: 25px;

    margin-bottom: 5px;
    color: rgb(105, 103, 103);
    padding-top: 10px;
}

.temperature-value {
    text-align: start;
    font-size: 24px;

    font-weight: bold;
    color: rgba(0, 0, 0, 0.786);
    padding-bottom: 10px;

}

.first {
    display: flex;
    flex-direction: column;

    height: 100%;

    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);

}

.aab {
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;

    align-items: start;

}

.class7 {
    margin-top: 50px !important;
    box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.1);
}

.top {
    display: flex;

}

.danger-label {
    color: red;
    font-weight: bold;

    margin-left: 25px;

    padding: 10px;

    border-radius: 6px;

    background-color: rgba(255, 0, 0, 0.1);

}

.danger-label2 {
    color: green;
    font-weight: bold;

    margin-left: 25px;

    padding: 10px;

    border-radius: 6px;

    background-color: rgba(60, 255, 0, 0.1);

}

.danger-label3 {
    color: green;
    font-weight: bold;

    margin-left: 60px;

    padding: 10px;

    border-radius: 6px;

    background-color: rgba(60, 255, 0, 0.1);

}

.title {
    font-size: 30px;

    text-align: center;
    color: rgb(82, 81, 81);
}

.title2 {
    font-size: 20px;

    text-align: center;
    color: rgb(89, 88, 88);
}

.dropdown-arrow {
    padding-left: 10px;

}

.h6 {
    color: rgb(133, 113, 113);
    font-size: 15px;
    text-align: center;
}

.percentage {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 24px;
    font-weight: bold;
}

canvas {
    display: block;
    width: 200px;
    height: 200px;
}

#chart {
    width: 100%;

    max-width: 400px;

    height: 300px;

}

.center-content {
    display: flex;
    align-items: center;
    justify-content: center;
}

.center-content {
    display: flex;
    flex-direction: column;
    align-items: center;

    justify-content: center;

}

.profit-label {
    font-size: 1.5rem;

    font-weight: bold;
    color: green;

}

.profit-value {
    font-size: 1.2rem;

    margin-bottom: 1rem;
    color: gray
}

.center-content {
    display: flex;
    flex-direction: column;
    align-items: center;

    justify-content: center;

}

.green-text {
    color: #12bf12;
}

.profit-label {
    font-size: 1.6rem;

    font-weight: bold;

}

.profit-value {
    font-size: 1.6rem;

    margin-bottom: 1rem;
    font-weight: bold;

}

.profit-container {

    padding: 20px;
    border-radius: 10px;

}

.bordered-container {
    display: inline-flex;
    align-items: center;

    padding: 5px 10px;
    border-radius: 4px;

}

.dropdown-arrow {
    padding-left: 10px;

}

#timeline-chart {
    width: 100%;
    height: 300px;

}

@media only screen and (max-width: 480px) {
    #chart {
        height: 300px;

    }
}

.col1 .title,
.col1 .h6 {
    text-align: center;
    margin: 0;
}

.bordered-container,
.center-content {
    margin-bottom: 15px;

}

.center-content {
    text-align: center;
}

.profit-container {
    padding: 5px;
    border-radius: 5px;
    margin: 0 auto;
    display: inline-block;
    margin-left: 0px;
}

@media only screen and (min-width: 768px) {
    .col1 {
        text-align: left;
    }
}

@media only screen and (min-width: 992px) {
    .bordered-container {
        margin-left: 20px;
    }

    .center-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .profit-container {
        padding: 20px;
        border-radius: 10px;
    }
}

.class10 {
    background-color: #e4e8ef;
}

.class12 {
    color: rgb(78 197 7 / 79%);
}

.box {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;

    transition: transform 0.3s, background-color 0.3s;

    cursor: pointer;

}

.box:hover {
    transform: scale(1.05);

}

.box:hover .space1,
.box:hover .space2 {}

.first {
    display: flex;
    flex-direction: column;

    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-height: 400px;
}

.aab {
    padding: 10px;
    margin: 10px 0;
    border-bottom: 1px solid #e7e7e7;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
}

.temperature-label {
    font-weight: bold;
    color: #333;

    margin-bottom: 10px;

    font-size: 20px;
}

.top {
    display: flex;
    align-items: baseline;

}

.temperature-value {
    font-size: 24px;
    font-weight: bold;
    margin-right: 10px;

}

.danger-label,
.danger-label2,
.danger-label3 {
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 14px;
}

.danger-label {
    background-color: #FF4136;

    color: white;
}

.danger-label2 {
    background-color: #3D9970;

    color: white;
}

.danger-label3 {
    background-color: #3D9970;

    color: white;
}

.table {
    width: 100%;

    text-align: start;
}

.thead {
    font-size: 20px;

    text-align: start;
    height: 50px;
}

.tbody {
    font-size: 20px;

    text-align: start;
    height: 270px;
    padding: 10px;
    text-align: center;
}

.centered-percentage {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;

    color: #333;

}

.scrollable-content {
    max-height: 500px;

}

.modal-content img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    margin: auto;
}

.modal-content {
    position: relative;
    overflow: hidden;
    margin: 20px;
    /* Give some margin to the modal */
    max-height: calc(100% - 40px);
    /* Considering the margin */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Modal Backdrop */
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    /* semi-transparent black */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

/* Center the Modal Content */
.modal-content {
    position: relative;
    overflow: hidden;
    margin: 20px;
    max-width: 90%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background: white;
    /* or any desired background color for the modal content */
}

/* Styling the Image inside the Modal */
.modal-content img {
    display: block;
    width: 900px;
    /* Example fixed width */
    height: 600px;
    /* Example fixed height */
    margin: auto;
}

/* Close Button for the Modal */
.close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
}

.page1 {
    color: rgba(0, 0, 255, 0.73);
    margin-left: 32px;

}

.page2 {
    color: rgba(0, 0, 255, 0.73);
    margin-left: 38px;
}

.page3 {
    margin-left: 30px;
}

.page4 {
    margin-left: 27px;
}

/* General Styles for v-title */
v-title {
    color: #333;
    /* Dark Gray for Titles */
    font-weight: 600;
    /* Semi-Bold */
    letter-spacing: 0.8px;
    /* Adds some spacing between letters for clarity */
}

/* Styling for .Crop class title */
.Crop {
    color: #019f00;
    /* Blue color */
    text-transform: uppercase;
    margin-bottom: 10px;
}

/* Styling for .heading class title */
.heading {
    color: #6C757D;
    /* Darker shade of gray for sub-heading */
    font-size: 18px;
    margin-bottom: 5px;
}

/* Styling for table3 class title */
.table3 {
    color: #343A40;
    /* Almost black for more emphasis */
    font-weight: 500;
    /* Medium Bold */
}

/* Styling for clickable 'view' links */
.view-link {
    color: #17a2b8;
    /* Blue, commonly used for links */
    transition: 0.3s;
    /* Smooth transition for hover effects */
    text-decoration: none;
    /* Removes the underline */
    font-size: 16px;
    /* Adjusting font size for better readability */
    padding: 5px;
    /* Adding some padding for hover effect space */
}

.view-link:hover {
    background-color: #18b4cb;
    /* Blue background on hover */
    color: #FFFFFF;
    /* White text on hover */
    border-radius: 4px;
    /* Rounded corners */
}

.export-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
}

.export-container button {
    padding: 10px 15px;
    margin-top: 5px;
    background-color: #17a2b8;
    /* Teal color theme */
    border: none;
    border-radius: 5px;
    color: #ffffff;
    cursor: pointer;
    transition: background-color 0.3s;
}

.export-container button:hover {
    background-color: #17a2b8;
    /* Darker shade of teal on hover */
}

.export-container>button {
    margin-top: 0;
}

.export-container div[v-if="showExportOptions"] {
    position: absolute;
    top: 100%;
    left: 0;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    border: 1px solid #e3e3e3;
    border-radius: 5px;
    overflow: hidden;
    z-index: 100;
    /* To make sure the dropdown appears above other elements */
}

.export-container div[v-if="showExportOptions"] button {
    display: block;
    width: 100%;
    text-align: left;
    background-color: #ffffff;
    color: #333;
}

.export-container div[v-if="showExportOptions"] button:hover {
    background-color: #f5f5f5;
    color: #17a2b8;
}

button {
    background-color: #17a2b8;
    color: #fff;
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 10px;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #0da5bc96;
}
</style>
