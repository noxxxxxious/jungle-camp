import { createStore } from 'vuex'
const itemList = require('@/assets/predecessor-items.json')

export default createStore({
  state: {
    itemList,
    currentlySelectedItem: null,
    currentlyHoveredComponent: null
  },
  getters: {
    getItemList (state) {
      return state.itemList
    },

    getCurrentlySelectedItem (state) {
      return state.currentlySelectedItem
    },

    getCurrentlyHoveredComponent (state) {
      return state.currentlyHoveredComponent
    }
  },
  mutations: {
    setCurrentlySelectedItem (state, inItemObject) {
      state.currentlySelectedItem = inItemObject
    },

    setCurrentlyHoveredComponent (state, inItemObject) {
      state.currentlyHoveredComponent = inItemObject
    }
  },
  actions: {
    setCurrentlySelectedItem (context, inItemObject) {
      context.commit('setCurrentlySelectedItem', inItemObject)
    },

    setCurrentlyHoveredComponent (context, inItemObject) {
      context.commit('setCurrentlyHoveredComponent', inItemObject)
    }
  },
  modules: {
  }
})
