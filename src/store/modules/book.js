import axios from 'axios'
const state = {
    fiction:[]
}

const getters = {
    get8Fiction(state){
        return state.fiction.slice(0,8);
    },
    getFiction(state){
        return state.fiction;
    }
}

const actions = {
    loadFiction(context){
        axios.get('/api/book/search',{params:{q:"虚构类"}}).then(function(res){
            // context.commit('setFiction',res.data.subjects);
            // data = res;
            console.log(res);
        }).catch(function(error){
            console.log(error);
        });

        // return data;
    }
}

const mutations = {
    setFiction(state,data){
        state.fiction= data;
    }
}
export default{
    state,
    getters,
    actions,
    mutations
}