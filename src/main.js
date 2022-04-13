import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mdiVue from 'mdi-v'

createApp(App).use(store).use(router).mount('#app')
