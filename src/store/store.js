import Vuex from 'vuex'
import Vue from 'vue'
import state from './state.js'
import getters from './getters.js'
import actions from './actions.js'
import mutations from './mutations.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})