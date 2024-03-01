import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import About from './components/About.vue'


import App from './App.vue'


const pinia = createPinia()
const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes: [
  { path: '/', component: HelloWorld },
  {path: '/about', component: About}
]
})

app.use(router)
app.use(pinia)
app.mount('#app')