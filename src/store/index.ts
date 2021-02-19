import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate';
import { secureStorage } from './secure-storage';

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      key: 'nutrifit-admin',
      storage: {
        getItem: (key) => secureStorage.get(key),
        setItem: (key, value) => secureStorage.set(key, value),
        removeItem: (key) => secureStorage.remove(key),
      },
    }),
  ],
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
