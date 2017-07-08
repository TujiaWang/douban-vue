<template>
    <div class="page">
      <div class="card">
          <ul class="quick-nav">
              <li>
                <router-link to="/movie">影院热映</router-link>
              </li>
              <li>
                <router-link to="/book">最受关注图书</router-link>
              </li>
              <li>
                <a href="https://m.douban.com/time">豆瓣时间</a>
              </li>
              <li>
                <a href="https://www.douban.com/doubanapp">使用豆瓣App</a>
              </li>
          </ul>
          <section id="recommend-feed">
              <db-rec></db-rec>
          </section>
      </div>
    </div>
</template>

<script>
import Recommend from './Recommend'
export default {
  name: 'home',
  components:{
    'db-rec':Recommend
  }
}
</script>

<style lang="less" scoped>
.quick-nav{
    overflow: hidden;
    margin: 20px 0 0 0;
    padding-top: 6px;

    li{
      float: left;
      width: 50%;
      padding: 3px;
      box-sizing: border-box;
      font-size: 15px;

      a{
        background-color: #f6f6f6;
        color: #494949;
        display: block;
        text-align: center;
        line-height: 20px;
        padding: 12px 0;
        border-radius: 2px;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
      }
    }
}
#recommend-feed{
    margin: 2px -18px 0 -18px;
    min-height: 480px;
    color: #494949;
}
</style>
