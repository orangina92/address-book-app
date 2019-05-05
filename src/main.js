import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

const Config = {
  apiKey: "AIzaSyBbum-KA1mvnB7s0zbrviePpJzNg666bfE",
  authDomain: "adress-book-app.firebaseapp.com",
  databaseURL: "https://adress-book-app.firebaseio.com",
  projectId: "adress-book-app",
  storageBucket: "adress-book-app.appspot.com",
  messagingSenderId: "582892057513",
  appId: "1:582892057513:web:23d6f981adf4543c"
};
firebase.initializeApp(Config);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
