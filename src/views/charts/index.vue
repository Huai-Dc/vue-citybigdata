<template>
    <div class="chart-container">
        <el-row :gutter="15" style="margin-bottom: 20px;">
            <el-col :lg="12"><div class="grid-content bg-purple">
                <bar-chart></bar-chart>
            </div></el-col>
            <el-col :lg="12"><div class="grid-content bg-purple">
                <line-chart></line-chart>
            </div></el-col>
        </el-row>
        <el-row :gutter="15">
            <el-col :lg="8">
                <pie-rose></pie-rose>
            </el-col>
            <el-col :lg="8">
                <radar></radar>
            </el-col>
            <el-col :lg="8">
                3
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import BarChart from './components/BarChart'
    import LineChart from './components/LineChart'
    import PieRose from './components/PieRose'
    import Radar from './components/Radar'
    export default {
        components: {
            PieRose, Radar,
            BarChart, LineChart},
        name: "index"
    }
</script>

<style scoped>

</style>