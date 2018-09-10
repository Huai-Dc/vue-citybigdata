/**
 * router 后执行
 */
import router from './router/index'
import store from './store/index';
import { getStorage, getCookie } from "./utils/storageData";

const whiteList = ['/login']; // 没有重定向白名单

router.beforeEach((to, from, next) => {
    let _token = getCookie('User-Token');
    if(_token){
        if(to.path === '/login'){ // 有token的直接 跳转首页
            next({path: '/'})
        }else{
            if(!store.getters.name || store.getters.name.length === 0){ // 拉取用户信息
                store.dispatch('getUserInfo').then((res) => {
                    next();
                });
            }else{
                next();
            }
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
            next();
        } else {
            next('/login') // 否则全部重定向到登录页
        }
    }
});

router.afterEach(() => {

});