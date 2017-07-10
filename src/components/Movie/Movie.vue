<template>
    <div>
        <db-header></db-header>
         <div class="page">
            <db-mshow></db-mshow>
            <db-mfree></db-mfree>
            <db-mlatest></db-mlatest>
            <db-minterests></db-minterests>
            <db-mtypes></db-mtypes>
            <db-footer></db-footer>
        </div>
    </div>
</template>
<script>
    import Header from '../../common/Header'
    import Footer from '../../common/Footer'
    import MovieShowing from './MovieShowing'
    import MovieFree from './MovieFree'
    import MovieLatest from './MovieLatest'
    import Interests from '../../common/Interests'
    import Types from '../../common/Types'
    export default{
        components:{
            'db-footer':Footer,
            'db-header':Header,
            'db-mshow':MovieShowing,
            'db-mfree':MovieFree,
            'db-mlatest':MovieLatest,
            'db-minterests':Interests,
            'db-mtypes':Types
        }
    }
</script>
<style lang="less">
    section{
        margin: 0;
        overflow: hidden;
        background-color: #fff;

        h2{
            display: inline-block;
            min-width: 4em;
            margin-bottom: 0;
            font-size: 18px;
            color: #111;
            padding-left: 0;
            padding-bottom: 0;
            font-size: 1.06rem;
        }
        header{
            padding:0 1.12rem;
            &:after{
                content: '';
                clear: both;
                display: block;
            }
            a{
                float: right;
                font-size: .9rem;
                line-height: 1.5rem;
            }
        }

        .section-content{
            margin-bottom:-1.12rem
        }
        .row {
            border-bottom: 1px solid #F2F2F2;
            padding: 15px 0 43px 0;
        }
        .items {
            font-size: 0;
            white-space: nowrap;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;

            .item {
                margin-left: 0.48rem;
                display: inline-block;
                vertical-align: top;
                width: 100px;
                text-align: center;
                a{
                    color: #111;
                    .item-poster {
                        width: 100%;
                        overflow: hidden;
                        background-size: cover;
                        background-position: center;
                        &::before {
                            content: "";
                            float: left;
                            margin-top: 142.85714%;
                        }
                    }
                    .item-title {
                        max-width: 100%;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        word-wrap: normal;
                        margin-top: .6rem;
                        display: block;
                        line-height: .94rem;
                    }
                    .item-rating {
                        color: #aaa;
                        line-height: .94rem;
                        margin-top: .3rem;
                        font-size: .72rem;

                        .rating-stars {
                            display: inline-block;
                            vertical-align: middle;
                        }
                    }
                }
            }
        }
        .items>*{
            font-size: .94rem;
            white-space: normal;
        }
    }
</style>