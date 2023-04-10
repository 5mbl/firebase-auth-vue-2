<script>
import { RouterLink, RouterView } from 'vue-router'

import { onBeforeMount } from 'vue';
import { useStore } from 'vuex';

export default{
  setup(){
    const store = useStore()
    
    onBeforeMount(()=>{
      store.dispatch("fetchUser")
    })

  }
}
</script>

<template>
  <header>

    <div class="wrapper">

      <div id="nav" v-if="$store.state.user">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <button @click="$store.dispatch('logout')">Logout</button>
        </nav>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
