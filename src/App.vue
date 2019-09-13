<template>
  <div id="app">
    <Header/>
    <vue-snotify></vue-snotify>
    <div id="loading" v-if="!loaded">Loading..</div>
    <router-view v-else></router-view>
  </div>
</template>

<script>
import Header from './components/Header'
import auth from './utils/auth'
import app from './utils/app'

export default {
  name: 'app',
  components: { Header },
  data() {
    return {
      loaded: false
    }
  },
  async mounted() {
    await app.waitForRouter()
    await app.load()
    auth.checkAuth()
    this.loaded = true
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
