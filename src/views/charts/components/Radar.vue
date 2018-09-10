<template>
    <div :class="className" :style="{ height:height, width:width }"></div>
</template>

<script>
    import ECharts from 'echarts'
    // 主题样式参考 http://echarts.baidu.com/download-theme.html
    require('echarts/theme/shine');
    export default {
        name: "radar",
        props: {
            className: {
                type: String,
                default: 'pie-rose-chart'
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
            initChart() {
                this.barChart = ECharts.init(this.$el, 'shine');
                this.barChart.setOption({
                    title: {
                        text: '基础雷达图'
                    },
                    tooltip: {},
                    legend: {
                        data: ['预算分配', '实际开销']
                    },
                    radar: {
                        shape: 'circle',
                        radius: 80,
                        name: {
                            textStyle: {
                                color: '#fff',
                                backgroundColor: '#999',
                                borderRadius: 3,
                                padding: [3, 5]
                            }
                        },
                        indicator: [
                            { name: '销售', max: 6500},
                            { name: '管理', max: 16000},
                            { name: '信息技术', max: 30000},
                            { name: '客服', max: 38000},
                            { name: '研发', max: 52000},
                            { name: '市场', max: 25000}
                        ]
                    },
                    series: [{
                        name: '预算 vs 开销',
                        type: 'radar',
                        itemStyle: {normal: {areaStyle: {type: 'default'}}},
                        data : [
                            {
                                value : [4300, 10000, 28000, 35000, 50000, 19000],
                                name : '预算分配'
                            },
                            {
                                value : [5000, 14000, 28000, 31000, 42000, 21000],
                                name : '实际开销'
                            }
                        ]
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