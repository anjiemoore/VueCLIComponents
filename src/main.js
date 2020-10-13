import { createApp } from 'vue';

import App from './App.vue';

// importing component from folder
import Contact from './components/Contact.vue';

//creating app
const app = createApp(App);

//importing the contact template from App and Contact
app.component('friend-contact', Contact);

// mounting the app
app.mount('#app')
