import { createApp } from 'vue';
import App from './components/App.vue';
import useStore from './store';
const app = createApp(App);
app.config.globalProperties.request = 'request';
app.use(useStore);
app.mount('#app')
