import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
    	productos: [
    		{name:'Macbook pro 13 2012', price: '500.000'},
    		{name:'Macbook pro 15 2012', price: '700.000'},
    		{name:'Macbook pro 13 2016', price: '950.000'},
    	]
    }
})
