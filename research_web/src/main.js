import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import newProject from './components/global components/newProject.vue'
import edit_Profile from './components/global components/edit_Profile.vue'
import alertCmp from './components/shared/alert.vue'

Vue.config.productionTip = false

Vue.component('newProject', newProject)
Vue.component('edit_Profile',edit_Profile)
Vue.component('app-alert', alertCmp)

new Vue({
  router,
  store,
  render: h => h(App),
  // created () {
  //   localStorage.id = "5b97ada2d9cc3a40f44a8a79"
  //   localStorage.reg_no= "sdvcnjkmvdf"
  // },
  // mounted () {
  //   this.$store.dispatch('userId', localStorage.id)
  //   this.$store.dispatch('reg_no', localStorage.reg_no)
  // },
}).$mount('#app')
