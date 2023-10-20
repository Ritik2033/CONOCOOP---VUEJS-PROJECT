<template>
    <div id="wrap">
        <div id="chart-combined">
            <apexchart type="line" height="400" ref="chartCombined" :options="chartOptionsCombined"
                :series="seriesCombined"></apexchart>
        </div>
    </div>
</template>

<style scoped>
.wrap {
    font-family: 'Neo', sans-serif;
}
</style>
  
<script>
import VueApexCharts from "vue-apexcharts";

export default {
    components: {
        apexchart: VueApexCharts,
    },
    data() {
        return {
            selectedChart: "combined",
            seriesCombined: [
                {
                    name: "Planned",
                    data: [100, 98, 96, 95, 92, 90, 88, 86, 83, 82, 80, 78], // Replace with your data points
                },
                {
                    name: "Re-Planned",
                    data: [100, 97, 95, 93, 90, 89, 87, 85, 82, 81, 79, 77], // Replace with your data points
                },
                {
                    name: "Actual",
                    data: [100, 96, 94, 92, 89], // Replace with your data points
                },
            ],
            chartOptionsCombined: {
                chart: {
                    id: "lineCombined",
                    height: 400,
                    width: "100%",
                    type: "line",
                    toolbar: {
                        show: false, // Hide the toolbar
                    },

                },
                stroke: {
                    width: [3, 3, 3], // Set line thickness for each series
                    curve: "smooth", // Use 'smooth' for straight lines
                },
                colors: ["#32CD32", "#00ffff", "#ffd700"],

                title: {
                    text: "Project Details",
                    align: "center",
                    style: {
                        fontSize: "20px",
                        color: 'rgba(91, 87, 87, 0.8)'
                    },
                },// Set colors for the lines
            },
        };
    },
};
</script>
