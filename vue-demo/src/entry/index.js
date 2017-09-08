// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'Vuex';

// import action from '../entry/vuex/module/action';
// import getter from '../entry/vuex/module/getter';
// import mutation from '../entry/vuex/module/mutation';
// import state from '../entry/vuex/module/state';
import App from './index.vue';

Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--;
        }
    }
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    data() {
        return {
            store: store
        };
    },
    template: '<App/>',
    components: {
        App
    }
});
