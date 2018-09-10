const getters = {
    isCollapse: state => state.app.isCollapse,
    name: state => state.user.name,
    routers: state => state.navigator.routers
};

export default getters