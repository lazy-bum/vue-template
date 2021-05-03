import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installPlugins from './plugins'
import installBaseComponents from './components'

import 'normalize.css'
import './styles/base.scss'

const app = createApp(App)

installPlugins(app)
installBaseComponents(app)

app.use(store).use(router).mount('#app')
