import axios from 'axios';
const state = {
    user: null,
    userData: null
};
const getters = {
    isAuthenticated: state => !!state.user,
    StateUser: state => state.user,
    UserData: state => state.userData
};

const actions = {
    async Register({ dispatch }, form) {
        await axios.post('register', form)

        let UserForm = new FormData()
        UserForm.append('id_user', form.id_user)
        UserForm.append('password', form.password)

        await dispatch('LogIn', UserForm)
    },
    async LogIn({ commit }, User) {
        await axios.post('/success/login', User)
            .then(result => { commit("setUserData", result.data) })
        await commit('setUser', User.username)
    },
    async LogOut({ commit }) {
        let user = null
        commit('logout', user)
    }
};
const mutations = {
    setUser(state, username) {
        state.user = username
    },
    LogOut(state) {
        state.user = null
        state.userData = null
    },
    setUserData(state, userData) {
        state.userData = userData
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
