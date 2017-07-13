<template> 
    <section id="market_product_book_mobile_web">
        <div id="book_header">
            <header>
                <h2>豆瓣书店</h2>
                <a href="https://market.douban.com/book/">更多</a>
            </header>
            <a href="" class="promBook">
                <img :src="fiction.header.cover.url" :alt="fiction.header.title" class="cover">
                <div class="content">
                    <div class="title"><span class="price">¥ {{fiction.header.price}}</span><p class="name">{{fiction.header.title}}</p></div>
                    <p class="infoWithoutReviewer">{{fiction.header.info}}</p>
                </div>
            </a>
        </div>
        
        <div class="section-content">
            <ul class="row items">
                <li class="item item_movie" v-for="item in fiction.subject_collection_items.slice(0,8)">
                    <a href="">
                        <div class="item-poster" :style="{backgroundImage: 'url(' + item.cover.url + ')'}"></div>
                        <span class="item-title">{{item.title}}</span>
                        <div class="item-rating">
                            <div class="rank">
                                <span>¥ {{item.price}}</span>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </section>
</template>
<script>
    import data from '../../../bookmarket.json'
    export default{
        data(){
            return {
                fiction:{}
            }
        },
        mounted(){
            console.log(data);
            this.fiction = data;
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
    #market_product_book_mobile_web{
        padding-top: 10px;
    }
    .promBook {
        display: block;
        overflow: hidden;
        margin: 15px 1.12rem 0px;
        .cover {
            float: left;
            width: 100px;
            margin-right: 15px;
        }
        .content {
            overflow: hidden;
            .title {
                margin: 10px 0;
            }
            .infoWithoutReviewer {
                display: -webkit-box;
                overflow: hidden;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 5;
            }
        }
        .price {
            float: right;
            color: #E76648;
            font-size: 16px;
            line-height: 22px;
        }
        .name {
            font-size: 19px;
            color: #494949;
            margin-right: 40px;
            max-width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-wrap: normal;
        }
    }
</style>