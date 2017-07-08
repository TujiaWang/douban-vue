<template>
  <div id="app">
    <db-header></db-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './components/Home/Home'
import Header from './common/Header'
export default {
  name: 'app',
  components:{
    'db-home':Home,
    'db-header':Header
  }
}
</script>

<style>

</style>
