
import { createApp } from 'vue'
import App from './App.vue'
import MyPlugin from './plugins/MyPlugin';

let app = createApp(App);

//install plugin
app.use(MyPlugin, {
    fontSize: "150px"
})
app.mount("#app");
