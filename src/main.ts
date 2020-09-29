import { createApp } from 'vue';
import App from './components/App.vue';
import useStore from './store/';
import useRouter from './router';
const app = createApp(App);
app.config.globalProperties.request = 'request';
app.use(useStore);
app.use(useRouter);
app.mount('#app')
