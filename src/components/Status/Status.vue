<template>
    <div>
        <db-header></db-header>
         <div class="page">
            广播列表
            <db-footer></db-footer>
        </div>
    </div>
</template>
<script>
    import Header from '../../common/Header'
    import Footer from '../../common/Footer'
    export default{
        components:{
            'db-footer':Footer,
            'db-header':Header
        }
    }
</script>
<style lang="less">
    
</style>