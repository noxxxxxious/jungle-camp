import { createStore } from 'vuex'
const itemList = require('@/assets/predecessor-items.json')

export default createStore({
  state: {
    itemList,
    currentView: 'itemDescriptions',
    currentlySelectedItem: null,
    currentlyHoveredComponent: null
  },
  getters: {
    getItemList (state)                   { return state.itemList },
    getCurrentView (state)                { return state.currentView },
    getCurrentlySelectedItem (state)      { return state.currentlySelectedItem },
    getCurrentlyHoveredComponent (state)  { return state.currentlyHoveredComponent }
  },
  mutations: {
    setCurrentView (state, inView)                      { state.currentView = inView },
    setCurrentlySelectedItem (state, inItemObject)      { state.currentlySelectedItem = inItemObject },
    setCurrentlyHoveredComponent (state, inItemObject)  { state.currentlyHoveredComponent = inItemObject }
  },
  actions: {
    setCurrentView (context, inView)                      { context.commit('setCurrentView', inView) },
    setCurrentlySelectedItem (context, inItemObject)      { context.commit('setCurrentlySelectedItem', inItemObject) },
    setCurrentlyHoveredComponent (context, inItemObject)  { context.commit('setCurrentlyHoveredComponent', inItemObject) }
  },
  modules: {
  }
})
