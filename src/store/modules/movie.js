import axios from 'axios'
const state = {
    theaters:[]
}

const getters = {
    get8Theaters(state){
        return state.theaters.slice(0,8);
    },
    getTheaters(state){
        return state.theaters;
    }
}

const actions = {
    loadTheaters(context){
        axios.get('/api/movie/in_theaters').then(function(res){
            context.commit('setTheaters',res.data.subjects);
            // data = res;
            // console.log(res.data.subjects);
        }).catch(function(error){
            console.log(error);
        });

        // return data;
    }
}

const mutations = {
    setTheaters(state,data){
        state.theaters= data;
    }
}
export default{
    state,
    getters,
    actions,
    mutations
}