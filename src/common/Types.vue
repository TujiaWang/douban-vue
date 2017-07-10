<template> 
    <section class="types">
        <header><h2>分类浏览</h2></header>
        <div class="section-content">
            <a name="cate"></a>
            <ul class="type-list">
                <li><a href="/movie/classic">经典<span></span></a></li>
                <li><a href="/movie/underrated">冷门佳片<span></span></a></li>
                <li><a href="/movie/doubantop">豆瓣高分<span></span></a></li>
                <li><a href="/movie/action">动作<span></span></a></li>
                <li><a href="/movie/comedy">喜剧<span></span></a></li>
                <li><a href="/movie/love">爱情<span></span></a></li>
                <li><a href="/movie/mystery">悬疑<span></span></a></li>
                <li><a href="/movie/horror">恐怖<span></span></a></li>
                <li><a href="/movie/scifi">科幻<span></span></a></li>
                <li><a href="/movie/sweet">治愈<span></span></a></li>
                <li><a href="/movie/artfilm">文艺<span></span></a></li>
                <li><a href="/movie/youth">成长<span></span></a></li>
                <li><a href="/movie/animation">动画<span></span></a></li>
                <li><a href="/movie/chinese">华语<span></span></a></li>
                <li><a href="/movie/western">欧美<span></span></a></li>
                <li><a href="/movie/korean">韩国<span></span></a></li>
                <li><a href="/movie/japanese">日本<span></span></a></li>
                <li></li>
            </ul>
        </div>
    </section>
</template>
<script>
    export default{

    }
</script>
<style lang="less" scoped>
    .types{
        margin-right:-25px;
        .section-content{
            margin-bottom:0;
            margin-left:.94rem;
            .type-list {
                padding: 1.12rem 0 1.88rem;
                color: #eee;
                font-size: .9rem;
                overflow: hidden;
                li {
                    width: 41.5%;
                    border-top: solid 1px #eee;
                    border-right: solid 1px #eee;
                    float: left;
                    padding-right: 1.12rem;
                    height: 2.64rem;
                    &:nth-child(even) {
                        border-right: none;
                        padding-left: 1.12rem;
                    }
                    &:last-child, &:nth-last-child(2){
                        border-bottom: solid 1px #eee;
                    }
                    a{
                        float: left;
                        display: inline-block;
                        width: 100%;
                        line-height: 2.64rem;
                        span{
                            color: #ccc;
                            float: right;
                            font-weight: bold;
                            display: inline-block;
                            border-right: solid 1px #ccc;
                            border-bottom: solid 1px #ccc;
                            width: .5rem;
                            height: .5rem;
                            transform: rotate(-45deg);
                            margin-top: 1rem;
                        }
                    }
                }
            }
        }
    }
</style>