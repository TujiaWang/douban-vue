<template>
    <header class="TalionNav">
        <div class="TalionNav-primary">
            <router-link to="/"><h1>豆瓣</h1></router-link>
            <nav>
                <ul>
                    <li>
                        <router-link to="/movie" style="color: rgb(35, 132, 232);">电影</router-link>
                    </li>
                    <li>
                        <router-link to="/book" style="color: rgb(159, 120, 96);">图书</router-link>
                    </li>
                    <li>
                        <router-link to="/status" style="color: rgb(228, 168, 19);">广播</router-link>
                    </li>
                    <li>
                        <router-link to="/group" style="color: rgb(42, 184, 204);">小组</router-link>
                    </li>
                </ul>
                <span @click="showSearch"></span>
            </nav>
        </div>
        <db-search v-show="showStatus" @showStatus="changeStatus"></db-search>
    </header>
</template>

<script>
    import Search from './Search'
    export default{
        data(){
            return {
                showStatus:false
            }
        },
        methods:{
            showSearch(){
                this.showStatus = true;
            },
            changeStatus(status){
                this.showStatus = status;
            }
        },
        components:{
            'db-search':Search
        }
    }
</script>

<style lang="less" scoped>
    
</style>