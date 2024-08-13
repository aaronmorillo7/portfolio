import { createApp } from 'vue'
import pinia from  "./store/index"
import router from "./router/index"
import './styles/index.scss'
import App from './App.vue'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
