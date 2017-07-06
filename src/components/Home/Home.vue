<template>
    <div class="home">
        <db-header></db-header>
        <router-view></router-view>
    </div>
</template>

<script>
import Header from '../../common/Header'
export default {
  name: 'home',
  data () {
    return {
      
    }
  },
  components:{
    'db-header':Header
  }
}
</script>

<style lang="less" scoped>

</style>
