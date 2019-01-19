import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import * as firebase from "firebase";

Vue.config.productionTip = false;

// Initialize Firebase
var config = {
  apiKey: "xxxxxxxxxxx",
  authDomain: "xxxxxxxxxxx",
  databaseURL: "xxxxxxxxxxx",
  projectId: "xxxxxxxxxxx",
  storageBucket: "xxxxxxxxxxx",
  messagingSenderId: "xxxxxxxxxxx"
};
firebase.initializeApp(config);

// Retrieve Firebase Messaging object.
const messaging = firebase.messaging();

// Add the public key generated from the console here.
messaging.usePublicVapidKey("xxxxxxxxxxx");

messaging.requestPermission().then(() => {
  console.log('Notification permission granted.');
  messaging.getToken().then((token) => {
    console.log(token);
  })
}).catch((err) => {
  console.log('Unable to get permission to notify.', err);
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
