import $http from './../../api/http';
import { setStorage, getStorage, setCookie } from './../../utils/storageData'

const SET_NAME = 'SET_NAME';
const SET_CNAME = 'SET_CNAME';
const SET_STATUS = 'SET_STATE';
const SET_ROLES = 'SET_ROLES';
const SET_TOKEN = 'SET_TOKEN';
const SET_CODE = 'SET_CODE';
const SET_AVATAR = 'SET_AVATAR';
const SET_INTRODUCTION = 'SET_INTRODUCTION';
const SET_USERID = 'SET_USERID';

const user = {
    state: {
        name: '', // 登录名
        userId: '', // 用户id
        cName: '',  // 中文名
        status: '', // 身份/地位
        roles: [], // 用户角色
        token: '',
        code: '',
        avatar: '', // 头像
        introduction: ''  // 描述
    },
    mutations: {
        [SET_NAME](state, name){
            state.name = name;
        },
        [SET_USERID](state, id){
            state.id = id;
        },
        [SET_CNAME](state, cname){
            state.cName = cname;
        },
        [SET_STATUS](state,status){
            state.status = status;
        },
        [SET_ROLES](state, roles){
            state.roles = roles;
        },
        [SET_TOKEN](state, token){
            state.token = token;
        },
        [SET_CODE](state, code){
            state.code = code;
        },
        [SET_AVATAR](state, avatar){
            state.avatar = avatar;
        },
        [SET_INTRODUCTION](state, introduction){
            state.introduction = introduction;
        }
    },
    actions: {
        LoginByUser({ commit, rootState }, userInfo){
            return new Promise((resolve, reject) => {
                $http.post('/login', userInfo)
                    .then(response => {
                        resolve(response);
                        const userData = response.data.user;
                        commit('SET_TOKEN', userData.token);
                        commit('SET_NAME', userData.name);
                        commit('SET_ROLES', userData.roles);
                        commit('SET_INTRODUCTION', userData.introduction);
                        commit('SET_USERID', userData.userId);

                        setCookie('User-Token', userData.token);
                        setStorage('User-Info', userData);
                    }).catch( error =>{
                        reject(error)
                })
            })
        },
        /**
         *  获取用户信息
         * @param commit
         * @param state
         * @returns {Promise<any>}
         */
        getUserInfo({ commit, state }){
            return new Promise((resolve, reject) => {
                // 此处可改成异步请求
                const isJson = function(obj){
                    if(typeof(obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length){
                        return true;
                    }
                    return false;
                }
                let userData = getStorage('User-Info');
                const {introduction, name, roles, userId} = isJson(userData)?userData:JSON.parse(userData);
                commit('SET_NAME', name);
                commit('SET_ROLES', roles);
                commit('SET_INTRODUCTION', introduction);
                commit('SET_USERID', userId);
                console.log(name);
                resolve({});
            });
        }
    }
};

export default user