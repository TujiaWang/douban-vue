<template> 
    <div class="main">
        <h1>免费在线观看新片</h1>
        <section class="grid">
            <a href="" class="item" v-for="item in freeMovies">
                <div class="cover">
                    <div class="ratio3_4"><img :src="item.cover.url" :alt="item.title" class="img-show" style="width: 100%;"><span class="action-tag">可播放</span></div>
                </div>
                <div class="info">
                    <h3>{{item.title}}</h3>
                    <p class="rank">
                        <span v-if="item.rating.value == 0">暂无评分</span>
                        <span class="rating-stars" v-if="item.rating.value != 0">
                            <span class="rating-star rating-star-small-full" v-for="s in 3"></span>
                            <span class="rating-star rating-star-small-gray" v-for="n in 2"></span> 
                        </span> 
                        <span v-if="item.rating.value != 0">{{item.rating.value}}</span>
                    </p>
                </div>
            </a>
        </section>
    </div>
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
    .main{
    padding-top:47px;
    padding-left: 2%;
    padding-right: 2%;
    max-width: 650px;
    margin: 0 auto;
    overflow-x: hidden;
    h1{
        font-size: 24px;
        font-weight: normal;
        box-sizing: border-box;
        max-width: 660px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 6px;
        padding-left: 4%;
        margin:0.67em 0;
    }
    .grid{
        padding: 20px 0;
        margin-left: auto;
        margin-right: auto;
        max-width: 660px;
        overflow: hidden;
        box-sizing: border-box;
        margin-bottom:0;
        .item {
            float: left;
            box-sizing: border-box;
            width: 33.33333%;
            padding-left: 4%;
            padding-right: 4%;
            margin-bottom: 20px;
            overflow: hidden;
            text-decoration: none;
            color: #9b9b9b;
            .cover {
                min-height: 87px;
                overflow: hidden;
                position: relative;
                .ratio3_4 {
                    position: relative;
                    &:before {
                        padding-top: 143%;
                        content: "";
                        display: block;
                    }
                    .action-tag {
                        font-size: 9px;
                        color: #fff;
                        border-radius: 3px;
                        border: 1px solid #eee;
                        background: #f5a623;
                        padding: 1px 5px;
                        position: absolute;
                        right: 5px;
                        bottom: 5px;
                    }
                    img{
                        display: block;
                        position: absolute;
                        left: -100%;
                        right: -100%;
                        top: -100%;
                        bottom: -100%;
                        margin: auto;
                        min-height: 100%;
                        min-width: 100%;
                    }
                }
            }
            .info {
                height: 45px;
                overflow: hidden;
                h3 {
                    font-size: 13px;
                    font-weight: normal;
                    padding: 5px 0 0;
                    color: #494949;
                    text-align: center;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                }
                .rank {
                    height: 16px;
                    font-size: 12px;
                    padding-top: 3px;
                    text-align: center;
                    line-height:16px;
                }
            }
        }
    }
}
</style>