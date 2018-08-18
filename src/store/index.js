import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import homeStore from './homeStore'

//VUEX数据存储
export default new Vuex.Store({
    modules: {
        home: homeStore,
    }
})