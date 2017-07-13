<template> 
    <section id="book_fiction">
        <header>
            <h2>最受关注图书｜虚构类</h2>
            <router-link to="/fiction">更多</router-link>
        </header>
        <div class="section-content">
            <ul class="row items">
                <li class="item item_movie" v-for="item in fiction.slice(0,8)">
                    <a href="">
                        <div class="item-poster" :style="{backgroundImage: 'url(' + item.cover.url + ')'}"></div>
                        <span class="item-title">{{item.title}}</span>
                        <div class="item-rating">
                            <div class="rank">
                                <span class="rating-stars">
                                    <span class="rating-star rating-star-small-full" v-for="s in 4"></span>
                                    <span class="rating-star rating-star-small-gray" v-for="n in 1"></span> 
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
    import data from '../../../fiction.json'
    export default{
        data(){
            return {
                fiction:[]
            }
        },
        mounted(){
            // console.log(data);
            this.fiction = data.subject_collection_items;
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
    #book_fiction{
        padding-top: 10px;
    }
</style>