// Entry point to vuex 
//Root module acts like a vuex store
import Vuex from 'vuex';
import Vue from 'vue';
import todos from './modules/todos';

//Loading Vuex
Vue.use(Vuex);

// create our store

export default new Vuex.Store({
    modules : {
        todos
    }
})