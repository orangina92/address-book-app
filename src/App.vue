<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-side-icon @click = "toggleSideMenu">
      </v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>マイアドレス</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <SideNav/>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import firebase from 'firebase'
import { mapActions } from 'vuex'
import SideNav from './components/SideNav'
export default {
  name: 'App',
  components: {
    SideNav
  },
  created () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setLoginUser(user)
      }
    })
  },
  data () {
    return {
      //
    }
  },
  methods: {
    ...mapActions(['toggleSideMenu','setLoginUser'])
  }
}
</script>
