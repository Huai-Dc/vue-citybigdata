<template>
    <div>
        <h3>高德vue-amap</h3>
        <div class="amap-wrapper">
            <el-amap class="amap-box" :vid="'amap-vue'"></el-amap>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import VueAMap from 'vue-amap'
    Vue.use(VueAMap)
    VueAMap.initAMapApiLoader({
        // 高德的key
        key: 'YOUR_KEY',
        // 插件集合
        plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
        // 高德 sdk 版本，默认为 1.4.4
        v: '1.4.4'
    });
    export default {
        name: "index"
    }
</script>

<style scoped>
.amap-wrapper{
    width: 100%;
    height: 600px;
}
</style>