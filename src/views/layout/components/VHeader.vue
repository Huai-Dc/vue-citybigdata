<template>
    <div>
        <div class="sideBar-toggle-btn" @click="toggleCollapse">
            <i :class="isCollapse?'el-icon-indent':'el-icon-outdent'"></i> <!--  el-icon-indent el-icon-outdent-->
        </div>
        <span>这是头部 {{userName}}</span>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: "v-header",
        data(){
            return {

            }
        },
        computed:{
            ...mapGetters([
                'isCollapse'
            ]),
            userName () {
                return this.$store.state.user.name
            }
        },
        methods:{
            toggleCollapse(){
                this.$store.dispatch('toogleCollapse');
            }
        }
    }
</script>

<style scoped>

</style>