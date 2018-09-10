<template>
    <div :class="className" :style="{ height:height, width:width }">折线图</div>
</template>

<script>
    import ECharts from 'echarts'
    // 主题样式参考 http://echarts.baidu.com/download-theme.html
    require('echarts/theme/shine');
    const animationDuration = 3000; // 动画延迟
    export default {
        name: "line-chart",
        props: {
            className: {
                type: String,
                default: 'line-chart'
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
                    title: {
                        text: '未来一周气温变化'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    grid: {
                        top: 50,
                        left: '2%',
                        right: 30,
                        bottom: '3%',
                        containLabel: true
                    },
                    legend: {
                        data:['最高气温','最低气温']
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            dataView: {readOnly: true},
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    xAxis:  {
                        type: 'category',
                        boundaryGap: false,
                        data: ['周一','周二','周三','周四','周五','周六','周日']
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel: {
                            formatter: '{value} °C'
                        }
                    },
                    series: [
                        {
                            name:'最高气温',
                            type:'line',
                            data:[11, 11, 15, 13, 12, 13, 10],
                            markPoint: {
                                data: [
                                    {type: 'max', name: '最大值'},
                                    {type: 'min', name: '最小值'}
                                ]
                            },
                            markLine: {
                                data: [
                                    {type: 'average', name: '平均值'}
                                ]
                            }
                        },
                        {
                            name:'最低气温',
                            type:'line',
                            data:[1, -2, 2, 5, 3, 2, 0],
                            markPoint: {
                                data: [
                                    {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                                ]
                            },
                            markLine: {
                                data: [
                                    {type: 'average', name: '平均值'},
                                    [{
                                        symbol: 'none',
                                        x: '90%',
                                        yAxis: 'max'
                                    }, {
                                        symbol: 'circle',
                                        label: {
                                            normal: {
                                                position: 'start',
                                                formatter: '最大值'
                                            }
                                        },
                                        type: 'max',
                                        name: '最高点'
                                    }]
                                ]
                            }
                        }
                    ]
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