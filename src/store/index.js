import { createStore } from 'vuex'
const itemList = require('@/assets/predecessor-items.json')

export default createStore({
  state: {
    itemList,
    currentView: 'itemDescriptions', //'itemDescriptions' or 'deckBuilder'
    currentlySelectedItem: null,
    currentlyHoveredComponent: null,
    userInfo: null
  },
  getters: {
    getItemList (state)                   { return state.itemList },
    getCurrentView (state)                { return state.currentView },
    getCurrentlySelectedItem (state)      { return state.currentlySelectedItem },
    getCurrentlyHoveredComponent (state)  { return state.currentlyHoveredComponent },
    getUserInfo (state)                   { return state.userInfo }
  },
  mutations: {
    setCurrentView (state, inView)                      { state.currentView = inView },
    setCurrentlySelectedItem (state, inItemObject)      { state.currentlySelectedItem = inItemObject },
    setCurrentlyHoveredComponent (state, inItemObject)  { state.currentlyHoveredComponent = inItemObject },
    setUserInfo (state, inUserInfo)                     { state.userInfo = inUserInfo }
  },
  actions: {
    setCurrentView (context, inView)                      { context.commit('setCurrentView', inView) },
    setCurrentlySelectedItem (context, inItemObject)      { context.commit('setCurrentlySelectedItem', inItemObject) },
    setCurrentlyHoveredComponent (context, inItemObject)  { context.commit('setCurrentlyHoveredComponent', inItemObject) },
    setUserInfo (context, inuserInfo)                     { context.commit('setUserInfo', inuserInfo) }
  },
  modules: {
  }
})
