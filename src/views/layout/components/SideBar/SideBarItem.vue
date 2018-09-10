<template>
    <div class="menuContent">
        <template v-for="(item, index) in routes" v-if="!item.hidden">
            <router-link v-if="isSingleItem(item)" :to="item.path + '/' + item.children[0].path">
                <el-menu-item :index="index+''">
                    <i v-if="item.children[0].meta && item.children[0].meta.icon"
                       :class="item.children[0].meta.icon"></i>
                    <span>{{ item.children[0].meta.title }}</span>
                </el-menu-item>
            </router-link>
            <!-- 参考https://element.faas.ele.me/#/zh-CN/component/menu -->
            <el-submenu v-else :index="''+index" :key="index">
                <template slot="title">
                    <i :class="item.meta.icon"></i>
                    <span slot="title">{{ item.meta.title }}</span>
                </template>
                <template v-for="(child, number) in item.children" v-if="!child.hidden">
                    <router-link :to="item.path + '/' + child.path">
                        <el-menu-item :index="index+'-'+number">{{ child.meta.title }}</el-menu-item>
                    </router-link>
                </template>
            </el-submenu>
        </template>
    </div>
</template>

<script>
    export default {
        name: "side-bar-item",
        props: {
            routes: {
                type: Array
            }
        },
        methods:{
            isSingleItem(item){
                console.log(item);
                if(item.path === ""){
                    return true
                }
            }
        },
        created: function() {
            console.log(this.routes)
        }
    }
</script>

<style scoped>

</style>