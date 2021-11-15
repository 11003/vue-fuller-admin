import { login, getInfo, logout } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

const state = {
    token: getToken(),
    name: '',
    avatar: ''
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_NAME: (state, name) => {
        state.name = name
    },
    SET_AVATAR: (state, avatar) => {
        state.avatar = avatar
    }
}

const actions = {
    // user login
    // 存入token到vuex
    UserLogin({ commit }, userInfo) {
        const { username, password } = userInfo
        return new Promise((resolve, reject) => {
            login({ username: username.trim(), password: password }).then(response => {
                const data = response;
                // data.data.xxx  是tp5返回json的标准格式
                commit('SET_TOKEN', data.data.token)//存在vueX中
                setToken(data.data.token)//存在cookie中
                resolve(data)
            }).catch(error => {
                reject(error)
            })
        })
    },

    // get user info
    // 把获取到的token进行鉴别
    UserGetInfo({ commit, state }) {
        return new Promise((resolve, reject) => {
            getInfo({ token: state.token }).then(response => {
                const { data } = response
                if (!data) {
                    reject('Verification failed, please Login again.')
                }
                const { name, avatar } = data

                commit('SET_NAME', name)
                commit('SET_AVATAR', avatar)
                resolve(data)
            }).catch(error => {
                reject(error)
            })
        })
    },
    // user logout
    UserLogout({ commit, state }) {
        return new Promise((resolve, reject) => {
            logout({token: state.token}).then(() => {
                commit('SET_TOKEN', '')
                removeToken()
                resetRouter()
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
    // remove token
    UserResetToken({ commit }){
        return new Promise(resolve => {
            commit('SET_TOKEN', '')
            removeToken()
            resolve()
        })
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}
