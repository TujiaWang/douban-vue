<template> 
    <section class="interests">
        <header><h2>发现好电影</h2></header>
        <div class="section-content">
            <ul>
                <li style="border-color: #42BD56;"><a href="https://m.douban.com/doulist/968362/" style="color: #42BD56;">同时入选IMDB250和豆瓣电影250的电影</a></li>
                <li style="border-color: #3BA94D;"><a href="https://m.douban.com/doulist/16002/" style="color: #3BA94D;">带你进入不正常的世界</a></li>
                <li style="border-color: #2384E8;"><a href="https://m.douban.com/doulist/190343/" style="color: #2384E8;">用电【影】来祭奠逝去的岁月</a></li>
                <li style="border-color: #FFAC2D;"><a href="https://m.douban.com/doulist/1125971/" style="color: #FFAC2D;">女孩们的故事【电影】</a></li>
                <li class="line"></li>
                <li style="border-color: #4F9DED;"><a href="https://m.douban.com/doulist/4253902/" style="color: #4F9DED;">科幻是未来的钥匙——科幻启示录【科幻题材】</a></li>
                <li style="border-color: #CC3344;"><a href="https://m.douban.com/doulist/121326/" style="color: #CC3344;">美国生活面面观</a></li>
                <li style="border-color: #FF4055;"><a href="https://m.douban.com/doulist/37479562/" style="color: #FF4055;">2015终极期待</a></li>
                <li style="border-color: #FFC46C;"><a href="https://m.douban.com/doulist/458087/" style="color: #FFC46C;">经典韩国电影——收集100部</a></li>
            </ul>
        </div>
    </section>
</template>
<script>
    export default{

    }
</script>
<style lang="less" scoped>
    .interests{
        ul{
            white-space: nowrap;
            overflow-x: auto;
            padding: 15px 15px 43px 15px;
            font-size: 0;
            margin-left: -5px;
            -webkit-overflow-scrolling: touch;
            li{
                margin: 0 0 8px 8px;
                font-size: .94rem;
                display: inline-block;
                border-radius: .25rem;
                border: solid 1px;
                vertical-align: middle;
                &.line{
                    width: 100%;
                    display: block;
                    height: 1px;
                    border: 0;
                    margin: 0;
                }
                a{
                    height: 50px;
                    line-height: 50px;
                    padding: 0 1.55rem;
                    letter-spacing: .1em;
                    overflow: auto;
                    display: block;
                    text-align: center;
                }
            }
        }
    }
</style>