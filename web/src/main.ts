import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { clerkPlugin } from 'vue-clerk/plugin'


const app = createApp(App)

app.use(router)

app.use(clerkPlugin, {
    publishableKey: import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
  })

app.mount('#app')
