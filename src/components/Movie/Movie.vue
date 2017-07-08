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
    
</style>