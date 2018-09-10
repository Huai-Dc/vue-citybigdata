<template>
    <div :class="className" :style="{ height:height, width:width }">饼图</div>
</template>

<script>
    /**
     * stack 是否堆叠
     */
    import ECharts from 'echarts'
    // 主题样式参考 http://echarts.baidu.com/download-theme.html
    require('echarts/theme/shine');
    const animationDuration = 3000; // 动画延迟
    export default {
        name: "bar-chart",
        props: {
            className: {
                type: String,
                default: 'bar-chart'
            },
            width: {
                type: String,
                default: '100%'
            },
            height: {
                type: String,
                default: '300px'
            },
            data: {
                type: Object,// 类型为 Object/ Array 时 默认值由一个工厂函数返回
                default: function(){
                    return {}
                }
            }
        },
        methods: {
            initChart(){
                this.barChart = ECharts.init(this.$el, 'shine');
                this.barChart.setOption({
                    tooltip:{
                        trigger: 'axis',
                        axisPointer: { // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        top: 10,
                        left: '2%',
                        right: '2%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [{
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        axisTick: {
                            alignWithLabel: true
                        }
                    }],
                    yAxis: [{
                        type: 'value',
                        axisTick: {
                            show: false
                        }
                    }],
                    series: [{
                        name: 'pageA',
                        type: 'bar',
                        stack: 'vistors',
                        barWidth: '60%',
                        data: [79, 52, 200, 334, 390, 330, 220],
                        animationDuration
                    }, {
                        name: 'pageB',
                        type: 'bar',
                        stack: 'vistors',
                        barWidth: '60%',
                        data: [80, 52, 200, 334, 390, 330, 220],
                        animationDuration
                    }, {
                        name: 'pageC',
                        type: 'bar',
                        stack: 'vistors',
                        barWidth: '60%',
                        data: [30, 52, 200, 334, 390, 330, 220],
                        animationDuration
                    }]
                })
            }
        },
        created(){
            console.log(this);
            console.log(this.$el)
        },
        mounted(){
            this.initChart();
        }
    }
</script>

<style scoped>

</style>