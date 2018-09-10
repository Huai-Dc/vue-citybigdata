<template>
    <div :class="className" :style="{ height:height, width:width }"></div>
</template>

<script>
    import ECharts from 'echarts'
    // 主题样式参考 http://echarts.baidu.com/download-theme.html
    require('echarts/theme/shine');
    export default {
        name: "pie-rose",
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
                    title : {
                        text: '南丁格尔玫瑰图'
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        x : 'center',
                        y : 'bottom',
                        data:['rose1','rose2','rose3','rose4','rose5','rose6','rose7','rose8']
                    },
                    toolbox: {
                        show : true,
                        feature : {
                            saveAsImage : {show: true}
                        }
                    },
                    calculable : true,
                    series : [
                        {
                            name:'面积模式',
                            type:'pie',
                            radius : [15, 90],
                            roseType : 'area',
                            data:[
                                {value:10, name:'rose1'},
                                {value:5, name:'rose2'},
                                {value:15, name:'rose3'},
                                {value:25, name:'rose4'},
                                {value:20, name:'rose5'},
                                {value:35, name:'rose6'},
                                {value:30, name:'rose7'},
                                {value:40, name:'rose8'}
                            ]
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