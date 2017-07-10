<template> 
    <section id="movie_showing">
        <header>
            <h2>免费在线观影</h2>
            <router-link to="/online">更多</router-link>
        </header>
        <div class="section-content">
            <ul class="row items">
                <li class="item item_movie" v-for="item in freeMovies.slice(0,8)">
                    <a href="">
                        <div class="item-poster" :style="{backgroundImage: 'url(' + item.cover.url + ')'}"></div>
                        <span class="item-title">{{item.title}}</span>
                        <div class="item-rating">
                            <div class="rank">
                                <span class="rating-stars">
                                    <span class="rating-star rating-star-small-full" v-for="s in 3"></span>
                                    <span class="rating-star rating-star-small-gray" v-for="n in 2"></span> 
                                </span>
                                <span>{{item.rating.value}}</span>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </section>
</template>
<script>
    import data from '../../../free.json'
    export default{
        data(){
            return {
                freeMovies:[]
            }
        },
        mounted(){
            this.freeMovies = data.subject_collection_items;
        }
    }
</script>
<style lang="less" scoped>
        li{
            &:last-child{
                margin-right:1.12rem;
            }
            &:first-child{
                margin-left:1.12rem;
            }
        }
</style>