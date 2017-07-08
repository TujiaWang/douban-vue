<template>
    <div>
        <db-header></db-header>
         <div class="page">
            <db-bfiction></db-bfiction>
            <db-bnonfinction></db-bnonfinction>
            <db-bmarket></db-bmarket>
            <db-types></db-types>
            <db-interests></db-interests>
            <db-footer></db-footer>
        </div>
    </div>
</template>
<script>
    import Header from '../../common/Header'
    import Footer from '../../common/Footer'
    import BookFiction from './BookFiction'
    import BookNonfiction from './BookNonfiction'
    import BookMarket from './BookMarket'
    import Interests from '../../common/Interests'
    import Types from '../../common/Types'
    export default{
        components:{
            'db-footer':Footer,
            'db-header':Header,
            'db-bfiction':BookFiction,
            'db-bnonfinction':BookNonfiction,
            'db-bmarket':BookMarket,
            'db-interests':Interests,
            'db-types':Types
        }
    }
</script>
<style lang="less">
    
</style>