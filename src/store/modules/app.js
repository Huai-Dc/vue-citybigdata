const SET_COLLAPSE = 'SET_COLLAPSE'

const app = {
    state: {
        isCollapse: false
    },
    mutations:{
        [SET_COLLAPSE](state){
            state.isCollapse = !state.isCollapse;
        }
    },
    actions: {
        toogleCollapse({commit}){
            commit('SET_COLLAPSE');
        }
    }
}

export default app