import { createApp } from 'vue';

import App from './App.vue';

// importing component from folder
import Contact from './components/Contact.vue';
import NewContact from './components/NewContact.vue';

//creating app
const app = createApp(App);

//importing the contact template from App and Contact
app.component('friend-contact', Contact);
app.component('new-contact', NewContact);

// mounting the app
app.mount('#app')
