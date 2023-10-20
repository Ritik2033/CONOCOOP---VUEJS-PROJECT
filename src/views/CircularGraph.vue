<template>
    <div class="circular-graph">
        <canvas ref="chart"></canvas>
    </div>
</template>

<script>
import { Pie, mixins } from 'vue-chartjs';

export default {
    name:'CircularGraph',
    extends: Pie,
    mixins: [mixins.reactiveProp],
    props: ['chartData'],
    mounted() {
        this.renderChart(this.chartData, {
            responsive: true,
            maintainAspectRatio: false,
            cutoutPercentage: 80,  // This makes it a donut chart
            tooltips: {
                enabled: false
            }
        });
    }
};
</script>

<style scoped>
.circular-graph {
    position: relative;
}
</style>
