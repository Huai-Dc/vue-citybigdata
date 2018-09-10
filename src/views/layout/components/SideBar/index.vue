<template>
    <scroll-bar>
        <el-menu mode="vertical" :collapse="isCollapse"
                 background-color="#545c64"
                 text-color="#fff"
                 active-text-color="#ffd04b">
            <side-bar-item :routes="routers"></side-bar-item>
        </el-menu>
    </scroll-bar>
</template>

<script>
    import { mapGetters } from 'vuex'
    import SideBarItem from './SideBarItem'
    import ScrollBar from "../../../../components/ScrollBar/index";
    export default {
        name: "side-bar",
        data(){
            return {

            }
        },
        computed: {
            ...mapGetters([
                'routers',
                'isCollapse'
            ])
        },
        components:{
            ScrollBar,
            SideBarItem
        }
    }
</script>

<style scoped>

</style>