import { createApp } from 'vue'
// import {createPinia} from 'pinia'
// import './style.css'
import router from "./routes/routes.js"
import App from './App.vue'

// const pinia = createPinia()
const app = createApp(App)

app.use(router)
// app.use(pinia)
app.mount('#app')
