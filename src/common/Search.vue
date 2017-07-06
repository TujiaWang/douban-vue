<template>
    <div class="TalionNav-secondary">
        <a href="javascript:;" class="close-nav" @click="closeSearch">关闭</a>
        <form action="">
            <input type="search" />
        </form>
        <ul>
            <li>
                <div>
                    <router-link to="/movie" target="_blank">
                        <strong style="color: rgb(35, 132, 232);">电影</strong>
                        <span>影院热映</span>
                    </router-link>
                    <a href="https://douban.com/location">
                        <strong style="color: rgb(230, 70, 126);">同城</strong>
                        <span>周末活动</span>
                    </a>
                    <a href="https://read.douban.com">
                        <strong style="color: rgb(159, 120, 96);">阅读</strong>
                        <span>电子书</span>
                    </a>
                    <a href="https://dongxi.douban.com">
                        <strong style="color: rgb(225, 100, 77);">东西</strong>
                        <span>心爱之物</span>
                    </a>
                </div>
            </li>
            <li>
                <div>
                    <router-link to="/tv" target="_blank">
                        <strong style="color: rgb(122, 106, 219);">电视</strong>
                        <span>正在热播</span>
                    </router-link>
                    <router-link to="/group" target="_blank">
                        <strong style="color: rgb(42, 184, 204);">小组</strong>
                        <span>志趣相投</span>
                    </router-link>
                    <router-link to="/game" target="_blank">
                        <strong style="color: rgb(87, 116, 197);">游戏</strong>
                        <span>虚拟世界</span>
                    </router-link>
                    <a href="https://douban.fm">
                        <strong style="color: rgb(64, 207, 169);">FM</strong>
                        <span>红心歌单</span>
                    </a>
                </div>
            </li>
            <li>
                <div>
                    <router-link to="/book" target="_blank">
                        <strong style="color: rgb(159, 120, 96);">图书</strong>
                        <span>畅销排行</span>
                    </router-link>
                    <router-link to="/music" target="_blank">
                        <strong style="color: rgb(244, 143, 46);">音乐</strong>
                        <span>新碟榜</span>
                    </router-link>
                    <router-link to="/mobileapp" target="_blank">
                        <strong style="color: rgb(89, 108, 221);">应用</strong>
                        <span>玩手机</span>
                    </router-link>
                    <a href="https://market.douban.com">
                        <strong style="color: rgb(66, 189, 86);">市集</strong>
                        <span>购买原创</span>
                    </a>
                </div>
            </li>
        </ul>
        <div class="navBottom">
            <div class="nav-item">
                <a href="">注册帐号</a><a href="">登录豆瓣</a>
            </div>
            <div class="nav-item">
                <a href="">使用桌面版</a><a href="">使用豆瓣App</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        methods:{
            closeSearch(){
                this.$emit('showStatus',false);
            }
        }
    }
</script>

<style lang="less" scoped>
    
</style>