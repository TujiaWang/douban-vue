import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

import getters from './getters'
import actions from './actions'

import movie from './modules/movie'

Vue.use(Vuex);

export default new Vuex.Store({
    actions,
    getters,
    modules:{
        movie
    }
});
