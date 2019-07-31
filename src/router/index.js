import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const _import = require('./_import_' + process.env.NODE_ENV)

import Layout from '../views/layout/Layout';

/**
 * hidden 是否在 导航栏显示
 * @type {*[]}
 */
export const constantRouterMap = [
    {
        path: '/login',
        component: _import('login/Login'),
        hidden: true
    },
    {
        path: '',
        component: Layout,
        redirect: 'HomeIndex',
        children: [
            {
                path: 'HomeIndex',
                name: 'HomeIndex',
                component: _import('Home'),
                meta: {
                    title: '首页',
                    icon: 'el-icon-home-fill'
                }
            }
        ]
    },
    {
        path: '/gaodeMap',
        component: Layout,
        meta: {
            title: '高德地图',
            icon: 'el-icon-location'
        },
        children: [
            {
                path: 'index',
                component: _import('gaodeMap/index'),
                name: 'gaodeMap',
                meta: {
                    title: 'vueAmap模块模式'
                }
            },
            {
                path: 'originalMap',
                component: _import('gaodeMap/OriginalMap'),
                name: 'originalMap',
                meta: {
                    title: '官方模式'
                }
            }
        ]
    },
    {
        path: '/ECharts',
        component: Layout,
        meta: {
            title: '百度EChart',
            icon: 'el-icon-linechart'
        },
        children: [
            {
                path: 'index',
                name: 'echartIndex',
                component: _import('charts/index'),
                meta:{
                    title: '常见图表'
                }
            }
        ]
    },
    {
        path: '/ThreeJs',
        component: Layout,
        meta: {
            title: 'ThreeJs',
            icon: 'el-icon-linechart'
        },
        children: [
            {
                path: 'index',
                name: 'echartIndex',
                component: _import('threeJs/index'),
                meta:{
                    title: 'demo'
                }
            }
        ]
    }
];

const router =  new Router({
    scrollBehavior: () => ({
        y: 0
    }),
    routes: constantRouterMap
});

export default router