import router from '@/route'
import { createApp } from 'vue'
import App from '@/App.vue'
import moment from "moment";

const app = createApp(App)

// set global properties
app.config.globalProperties.$moment = moment

app.use(router)
    .mount('#app')

/*
// error handling
app.config.errorHandler = (err) =>{
    //error handling
}
*/

/*
// multi app
const app = createApp(App)
    .use(router)
    .mount('#app2');
*/