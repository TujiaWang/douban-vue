<template>
    <div>
        <div class="feed-section" v-for="(day,index) in recommend_feed">
            <h2 class="date" v-if="index>0">{{day.date}}</h2>
            <a href="" class="feed-item" v-for="rec in day.recommend_feeds">
                <div class="feed-content">
                    <div class="cover" :style="{backgroundImage: 'url(' + rec.target.cover_url + ')'}" v-if="showCover(rec.target.photos_count,rec.target.cover_url)"><div style="padding-top: 100%;"></div></div>

                    <div class="photos" v-if="rec.target.photos_count">
                        <div class="main" :style="{backgroundImage: 'url(' + rec.target.cover_url + ')'}"><div></div></div>
                        <div class="aside">
                            <div class="aside-pic" v-for="(pic,index) in rec.target.more_pic_urls">
                                <div class="rightimg" :style="{backgroundImage: 'url(' + pic + ')'}"><div style="padding-top: 100%;"></div></div>
                                <div class="more-pic" v-if="index==1"><span class="count">{{rec.target.photos_count > 2 ? rec.target.photos_count - 3+'+' : ''}}</span></div>
                            </div>
                        </div>
                    </div>

                    <h3>{{rec.title}}</h3>
                    <p v-if="!rec.target.photos_count">{{rec.target.desc}}</p>
                    
                </div>
                <div class="author">by&nbsp;<span class="name">{{rec.target.author.name}}</span></div>
                <span class="feed-label">{{rec.source_cn}}</span>
            </a>
        </div>
        <div class="infinite-scroll-trigger"><div class="loadmore"></div></div>
    </div>
</template>
<script>
import data from '../../../data.json'
import data77 from '../../../data77.json'
export default {
    data(){
        return {
            recommend_feed:new Array()
        }
    },
    methods:{
        showCover(count,url){
            if(count){
                return false;
            }else{
                if(url==''){
                    return false;
                }else{
                    return true;
                }
            }
        }
    },
    mounted(){      
        this.recommend_feed.push(data);
        console.log(this.recommend_feed);
        let _this = this;
        let sw = true;  
        window.addEventListener('scroll',function(){
            if(document.body.scrollTop + window.innerHeight >= document.body.offsetHeight) {
                if(sw==true){
                    sw = false; 
                    _this.recommend_feed.push(data77);
                    console.log(_this.recommend_feed);
                    // sw = true; 
                }
            }
        });

    }
}
</script>

<style lang="less" scoped>
h2 {
    display: block;
    padding: 15px 18px 15px 0;
    text-align: center;
    position: relative;
    min-width: 4em;
    margin-bottom: 0;
    font-size: 18px;
    color: #111;
    &:before {
        left: 0;
        top: 0;
        width: 100%;
        height: 1px;
        background: #e3e3e3;
        -webkit-transform: scaleY(0.5);
        content: '';
        position: absolute;
        -webkit-transform-origin: 0 bottom;
    }
    &:after {
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        background: #e3e3e3;
        -webkit-transform: scaleY(0.5);
        content: '';
        position: absolute;
        -webkit-transform-origin: 0 bottom;
    }
}
.feed-item {
    display: block;
    padding: 25px 18px 25px 0;
    margin-left: 18px;
    position: relative;
    color: #494949;
    .feed-content {
        overflow: hidden;
        margin-bottom: 10px;
        .cover {
            width: 25.6%;
            margin-left: 25px;
            float: right;
            position: relative;
            background-position:center center;
            background-repeat:no-repeat;
            background-color:rgb(250, 250, 250);
            background-size:cover;
        }
        .photos {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            margin-bottom: 10px;
            .main {
                -webkit-box-flex: 3.2;
                -webkit-flex: 3.2;
                -ms-flex: 3.2;
                flex: 3.2;
                margin-right: 4px;
                position: relative;
                background-position:center center;
                background-repeat:no-repeat;
                background-color:rgb(250, 250, 250);
                background-size:cover;
            }
            .aside {
                -webkit-box-flex: 1;
                -webkit-flex: 1;
                -ms-flex: 1;
                flex: 1;
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                -webkit-flex-direction: column;
                -ms-flex-direction: column;
                flex-direction: column;
                .aside-pic {
                    position: relative;
                    .rightimg{
                        position: relative;
                        background-position:center center;
                        background-repeat:no-repeat;
                        background-color:rgb(250, 250, 250);
                        background-size:cover;
                    }
                    .more-pic {
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background-color: rgba(0,0,0,0.4);
                        color: #fff;
                        text-align: center;
                        display: -webkit-box;
                        display: -webkit-flex;
                        display: -ms-flexbox;
                        display: flex;
                        -webkit-box-align: center;
                        -webkit-align-items: center;
                        -ms-flex-align: center;
                        align-items: center;
                        .count {
                            width: 100%;
                        }
                    }
                }
            }
        }
        h3 {
            text-align: justify;
            font-size: 17px;
            font-weight: 500;
            line-height: 1.41;
            color: #494949;
            margin-bottom: 6px;
        }
        #recommend-feed .feed-content p {
            text-align: justify;
            color: #aaa;
            font-size: 12px;
            line-height: 1.5;
            display: -webkit-box;
            overflow: hidden;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
        }
    }
    .author {
        font-size: 12px;
        color: #ccc;
    }
    .feed-label {
        position: absolute;
        bottom: 25px;
        right: 18px;
        font-size: 12px;
        color: #ccc;
    }
}
.loadmore {
    margin-top: 25px;
    margin-bottom: 50px;
    margin-right: 18px;
    height: 40px;
    background: url(//img3.doubanio.com/f/talion/bf2ef8c5c1a8c84dddfd1135656857e73582c5d8/pics/card/loading_grey.gif) 50% 50% no-repeat;
    background-size: 24px 24px;
}
</style>