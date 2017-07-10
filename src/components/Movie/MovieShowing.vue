<template> 
    <section id="movie_showing">
        <header>
            <h2>影院热映</h2>
            <router-link to="/nowintheater">更多</router-link>
        </header>
        <div class="section-content">
            <ul class="row items">
                <li class="item item_movie" v-for="item in get8Theaters">
                    <a href="">
                        <div class="item-poster" :style="{backgroundImage: 'url(' + item.images.large + ')'}"></div>
                        <span class="item-title">{{item.title}}</span>
                        <div class="item-rating">
                            <div class="rank">
                                <span class="rating-stars">
                                    <span class="rating-star rating-star-small-full" v-for="s in Math.floor(item.rating.stars / 10)"></span>
                                    <span class="rating-star rating-star-small-gray" v-for="n in 5 - Math.floor(item.rating.stars / 10)"></span>
                                </span>
                                <span>{{item.rating.average}}</span>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </section>
</template>
<script>
    import {mapGetters,mapActions} from 'vuex'
    export default{
        computed: {
            ...mapGetters(['get8Theaters'])
        },
        methods: {
            ...mapActions(['loadTheaters'])
        },
        mounted(){
            this.loadTheaters();
        }
    }
</script>
<style lang="less" scoped>
    section{
        padding-top:10px;
        li{
            &:last-child{
                margin-right:1.12rem;
            }
            &:first-child{
                margin-left:1.12rem;
            }
        }
    }
</style>