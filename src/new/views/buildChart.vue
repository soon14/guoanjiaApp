<template>
    <div>
        <div class="buildChart">
            <div id="myChart" :style="{width: '100%', height: '200px',float:'left'}"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            chartInfo: '',
        }
    },
    methods: {
        chartsLoad() {
            var myChart = this.$echarts.init(document.getElementById('myChart'));
            myChart.setOption({
                title: {
                    text: '价格及走势',
                    x: 'center',
                    y: 'bottom'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['实时', '去年同期']
                },
                color: ['#666666', '#000000'],
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '实时',
                        type: 'line',
                        stack: '总量',
                        data: [1, 4, 5, 3, 9, 6]
                    },
                    {
                        name: '去年同期',
                        type: 'line',
                        stack: '总量',
                        data: [2, 6, 4, 8, 10, 12]
                    }]
            });
        }
    },
    mounted() {
        this.chartsLoad();
    }
}
</script>

<style lang="less" scoped>
.buildChart {
    width: 90%;
    height: 10rem;
    // background: red;
    margin-left: 5%;
}
</style>

