<template>
    <div>
        <db-header></db-header>
         <div class="page">
            <div class="card">
                <div id="status-list">
                    <div class="pull-refresh-container">
                        <div class="status-editor-bar">
                            <div class="avatar"><img src="https://img1.doubanio.com/icon/user_normal.jpg" alt="未登陆"></div>
                            <div class="holder">登录发广播</div>
                            <div class="icon icon-camera"></div>
                            <div class="icon icon-pen"></div>
                        </div>
                        <div class="pull-refresh-loading"></div>
                        <ul class="status-list comment-list">
                            <li v-for="s in status">
                                <div>
                                    <div class="desc">
                                        <a :href="s.status.author.url"><img data-type="avatar" :alt="s.status.author.name" :src="s.status.card ? s.status.author.avatar : s.status.reshared_status.author.avatar"></a>
                                        <a :href="s.status.author.url + (s.status.uri).replace('douban://douban.com','')">
                                            <div class="user-info">
                                                <strong>{{s.status.card ? s.status.author.name : s.status.reshared_status.author.name}}<span>{{s.status.card ? s.status.activity : '说'}}</span></strong>
                                                <div class="timestamp">{{s.status.create_time}}</div>
                                            </div>
                                        </a>
                                    </div>
                                    <a :href="s.status.author.url + (s.status.uri).replace('douban://douban.com','')"><div class="content">{{s.status.card ? '' : s.status.reshared_status.text}}</div></a>
                                </div>
                                <div class="feed-card article-card has-cover has-subtitle" v-if="s.status.card">
                                    <a href="">
                                        <div class="title">{{s.status.card ? s.status.card.title : '' }}</div>
                                        <div class="detail has-cover">
                                            <div class="text">{{s.status.card ? s.status.card.subtitle : '' }}</div>
                                            <div class="cover" data-type="cover" :style="{backgroundImage: 'url(' + getImg(s.status) + ')'}"></div>
                                        </div>
                                    </a>
                                </div>
                                <div class="info">
                                    <div class="ic-btn ic-btn-like left ">
                                        <span class="text">{{s.status.card ? s.status.like_count : s.status.reshared_status.like_count}}</span>
                                    </div>
                                    <div class="ic-btn ic-btn-comment left ">
                                        <span class="text">{{s.status.card ? s.status.comments_count : s.status.reshared_status.comments_count}}</span>
                                    </div>
                                    <div class="ic-btn ic-btn-retweet left ">
                                        <span class="text">{{s.status.card ? s.status.reshares_count : s.status.reshared_status.reshares_count}}</span>
                                    </div>
                                    <div class="ic-btn ic-btn-more right"></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <db-footer></db-footer>
        </div>
    </div>
</template>
<script>
    import Header from '../../common/Header'
    import Footer from '../../common/Footer'
    import data from '../../../status.json'
    export default{
        data(){
            return {
                status:[]
            }
        },
        methods:{
            getImg(status){
                // console.log(status);
                if(status.card){
                    if(status.card.image){
                        if(status.card.image.large){
                            return status.card.image.large.url;
                        }else{
                            return '';
                        }
                    }else{
                        return '';
                    }
                }else{
                    return '';
                }
            }
        },
        components:{
            'db-footer':Footer,
            'db-header':Header
        },
        mounted(){
            console.log(data.items);
            this.status = data.items;
        }
    }
</script>
<style lang="less" scoped>
    .pull-refresh-container {
        position: relative;
        .status-editor-bar {
            position: relative;
            margin: 0 -18px 5px;
            padding: 10px 18px;
            cursor: pointer;
            overflow: hidden;
            &::after {
                left: 0;
                bottom: 0;
                width: 100%;
                height: 1px;
                background: #E8E8E8;
                -webkit-transform: scaleY(0.5);
                content: '';
                position: absolute;
                -webkit-transform-origin: 0 bottom;
            }
            .avatar {
                width: 40px;
                height: 40px;
                float: left;
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
            }
            .holder {
                color: #aaa;
                padding-left: 10px;
                font-size: 15px;
                line-height: 40px;
                float: left;
            }
            .icon-camera {
                margin-right: 0;
                width: 40px;
                height: 40px;
                padding: 8px;
                position: relative;
                float: right;
                box-sizing: border-box;
                &::before {
                    content: '';
                    position: absolute;
                    width: 24px;
                    height: 24px;
                    background-size: contain;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-image: url(https://img3.doubanio.com/f/talion/68ab505eac3e7551815c06a5e03a26a6373bb46c/pics/card/ic_status_camera.svg);
                }
            }
            .icon-pen{
                margin-right: 0;
                width: 40px;
                height: 40px;
                padding: 8px;
                position: relative;
                float: right;
                box-sizing: border-box;
                &::before {
                    content: '';
                    position: absolute;
                    width: 24px;
                    height: 24px;
                    background-size: contain;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-image: url(https://img3.doubanio.com/f/talion/d9ba3fa414721588284167944c70664e685993b1/pics/card/ic_status_pen.svg);
                }
            }
        }
        .pull-refresh-loading {
            background: url(https://img3.doubanio.com/f/talion/bf2ef8c5c1a8c84dddfd1135656857e73582c5d8/pics/card/loading_grey.gif) no-repeat;
            background-position: center;
            background-size: 24px;
            width: 100%;
            height: 48px;
            z-index: -1;
            position: absolute;
            left: 0;
            top: 60px;
            opacity: 0;
            -webkit-transform: "translateZ(0)";
            -moz-transform: "translateZ(0)";
            -ms-transform: "translateZ(0)";
            -o-transform: "translateZ(0)";
            transform: "translateZ(0)";
        }
        .status-list {
            overflow: hidden;
             li {
                position: relative;
                padding-bottom: 20px;
                margin-top: 20px;
                margin-bottom: 20px;
                padding-left: 50px;
                .desc {
                    display: -webkit-box;
                    display: -moz-box;
                    display: box;
                    display: -webkit-flex;
                    display: -moz-flex;
                    display: -ms-flexbox;
                    display: flex;
                    font-size: 0;
                    line-height: normal;
                    margin: 0 0 11px -50px;
                    color: #494949;
                    position: relative;
                    align-items: center;
                    img {
                        width: 40px;
                        height: 40px;
                        margin-right: 10px;
                        border-radius: 50%;
                        vertical-align: text-top;
                    }
                    .user-info {
                        -webkit-box-flex: auto;
                        -moz-box-flex: auto;
                        box-flex: auto;
                        -webkit-flex: auto;
                        -moz-flex: auto;
                        -ms-flex: auto;
                        flex: auto;
                        strong {
                            font-size: 17px;
                            line-height: 1;
                            color: #494949;
                            display: inline-block;
                            vertical-align: text-top;
                            margin-right: 6px;
                            span {
                                color: #aaa;
                                font-weight: normal;
                            }
                        }
                        .timestamp {
                            font-size: 14px;
                            margin-top: 6px;
                            line-height: 1;
                            color: #aaa;
                        }
                    }
                }
                .feed-card {
                    padding: 15px;
                    margin: 10px 0 20px;
                    border-radius: 2px;
                    border: solid 1px #d8d8d8;
                    .title {
                        font-size: 17px;
                        font-weight: 500;
                        line-height: 1.4;
                        color: #494949;
                        margin-bottom: 5px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }
                    .detail {
                        height: 48px;
                        padding-right: 90px;
                        position: relative;
                        .text {
                            font-size: 12px;
                            line-height: 16px;
                            color: #aaa;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-line-clamp: 3;
                            -webkit-box-orient: vertical;
                        }
                        .cover {
                            width: 75px;
                            height: 48px;
                            background-size: cover;
                            background-position: center;
                            background-repeat: no-repeat;
                            position: absolute;
                            top: 0;
                            right: 0;
                        }
                    }
                }

                .info {
                    padding-left: 0;
                    margin-top: 13px;
                    margin-right: -20px;
                    overflow: auto;
                    .ic-btn {
                        display: inline-block;
                        margin-right: 20px;
                        font-size: 14px;
                        cursor: pointer;
                        &.left {
                            float: left;
                        }
                        &::before {
                            content: '';
                            width: 20px;
                            height: 20px;
                            background-position: center center;
                            background-repeat: no-repeat;
                            display: inline-block;
                            margin-bottom: -2px;
                        }
                        .text {
                            color: #ccc;
                            margin-left: 3px;
                            position: relative;
                            left: 0;
                            top: -3px;
                        }
                    }
                    .ic-btn-like::before {
                        background-image: url(https://img3.doubanio.com/f/talion/7a0756b3b6e67b59ea88653bc0cfa14f61ff219d/pics/card/ic_like_gray.svg);
                    }
                    .ic-btn-comment::before {
                        background-image: url(https://img3.doubanio.com/f/talion/ac8a7e0d5f471480549c7abf45fc0fa4c3b4184f/pics/card/ic_comment.svg);
                    }
                    .ic-btn-retweet::before {
                        background-image: url(https://img3.doubanio.com/f/talion/8604ef3950b947d55406e2a6f5cf6ca7f0b934e3/pics/card/ic_retweet_gray.svg);
                    }
                    .ic-btn-more::before {
                        background-image: url(https://img3.doubanio.com/f/talion/be268c0a1adb577c8dfdcfbe48c818af3983ed62/pics/card/more.svg);
                    }
                }
                

                &::after {
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    height: 1px;
                    background: #E8E8E8;
                    -webkit-transform: scaleY(0.5);
                    content: '';
                    position: absolute;
                    -webkit-transform-origin: 0 bottom;
                    margin-left: 46px;
                }
                .content {
                    font-size: 17px;
                    padding-left: 0;
                    margin-top: 10px;
                    line-height: 22px;
                    color: #494949;
                }
            }
        }
    }
</style>