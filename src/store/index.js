import { createStore } from 'vuex'
const itemList = require('@/assets/predecessor-items.json')

export default createStore({
  state: {
    itemList,
    currentlySelectedItem: null
  },
  getters: {
    getItemList (state) {
      return state.itemList
    },

    getCurrentlySelectedItem (state ) {
      return state.currentlySelectedItem
    }
  },
  mutations: {
    setCurrentlySelectedItem (state, inItemObject) {
      state.currentlySelectedItem = inItemObject
    }
  },
  actions: {
    setCurrentlySelectedItem (context, inItemObject) {
      context.commit('setCurrentlySelectedItem', inItemObject)
    }
  },
  modules: {
  }
})
