import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headerName: 'لیست پرسشنامه ها'
  },
  mutations: {
    SET_Q_HEADER(state , title){
      state.headerName = title;
    }
  },
  actions: {
  },
 
  modules: {
  }
})
