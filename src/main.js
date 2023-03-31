import { createApp } from 'vue'
//global styling
import './styles.scss'
import App from './App.vue'
import router from './router'
createApp(App).use(router).mount('#app')
