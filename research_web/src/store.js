import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    feedProjects: [],
    userId: localStorage.id,
    personalProjects: [],
    bookmarkProjects: [],
    regNo: localStorage.reg_no,
    name: localStorage.name,
    loading: false,
    error: null,
    notifCount: 0
  },
  getters: {
    notifCount(state)
    {
      return state.notifCount
    },
    error (state)
    {
      return state.error
    },
    getBookmarkProject (state) {
      return state.bookmarkProjects
    },
    getPersonalProjects (state) {
      return state.personalProjects
    },
    loading (state) {
      return state.loading
    },
    userId (state) {
      return state.userId
    },
    regNo (state) {
      return state.regNo
    },
    name (state) {
      return state.name
    }
  },
  mutations: {
    setNotifCount(state, payload)
    {
      state.notifCount = payload
    },
    clrNotifCount (state)
    {
      state.notifCount = 0
    },
    setError (state, payload)
    {
      state.error = payload
    },
    clearError(state)
    {
      state.error = null
    },
    setFeed (state, payload) {
      state.feedProjects = payload
    },
    personalProjects (state, payload) {
      state.personalProjects = payload
    },
    bookmarks (state, payload) {
      state.bookmarkProjects = payload
    },
    userId (state, payload) {
      state.userId = payload
    },
    reg_no (state, payload) {
      state.regNo = payload
    },
    name (state, payload) {
      state.name = payload
    },
    loading (state, payload) {
      state.loading = payload
    }

  },
  actions: {
    async setNotifCount ({commit, getters}) {
      const response = await axios.post('/seenotif', {
        "id": getters.userId
      })
      const notif = response.data.data
      commit('setNotifCount', notif.length)
    },
    clrNotifCount({commit})
    {
      commit ('clrNotifCount')
    },
    setError ({commit}, payload)
    {
      commit("setError", payload);
    },
    clearError ({commit})
    {
      commit('clearError')
    },
    personalProjects ({commit, state}) {
      axios.post('/myprojects', {
        '_id': state.userId,
      })
      .then(response => {
        if (response.data.item) {
        commit('personalProjects', response.data.item)
      } else {
          commit('personalProjects', [])
        }
      })
      .catch(err => {
        console.log(err)
      })
    },
    async bookmarks ({commit}) {
      try {
        const response = await axios.get('/bookmarkProjects')
        commit('bookmarks', response.data)
      } catch (e) {
        console.log(e)
      }
    },
    userId ({ commit }, payload) {
      commit('userId', payload)
    },
    reg_no ({ commit }, payload) {
      commit('reg_no', payload)
    },
    name ({ commit }, payload) {
      commit('name', payload)
    },
    loading({commit}, payload) {
      commit('loading', payload)
    }
  }
})
