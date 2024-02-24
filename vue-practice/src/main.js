import { createApp } from 'vue'
import './style.css'
import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import About from './components/About.vue'

import App from './App.vue'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes: [
  { path: '/', component: HelloWorld },
  {path: '/about', component: About}
]
})

app.use(router)
app.mount('#app')