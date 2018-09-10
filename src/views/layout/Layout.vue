<template>
    <el-container :class="{highSideBar: isCollapse}">
        <!-- 左侧导航 -->
        <el-aside width="190px" class="scroll-container">
            <side-bar></side-bar>
        </el-aside>
        <!-- 右侧主体 -->
        <el-container class="main-container">
            <el-header>
                <v-header></v-header>
            </el-header>
            <el-main>
                <MainContent></MainContent>
            </el-main>
            <!--<el-footer>Footer</el-footer>-->
        </el-container>
    </el-container>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { SideBar, VHeader, MainContent } from './components/index'
    export default {
        name: "layout",
        data(){
            return {
            }
        },
        computed:{
            ...mapGetters([
                'isCollapse'
            ]),
        },
        components: {
            MainContent,
            SideBar, VHeader
        }
    }
</script>

<style type="text/scss" lang="scss" scoped>
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }
    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }
    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
    }
    .el-container {
        height: 100%;
    }
</style>