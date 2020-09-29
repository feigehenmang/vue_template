 import {createStore} from 'vuex';
 //创建一个 store
 export default createStore({
     state: {
         count: 5
     },
     getters: {
         newCount: state => state.count++
     },
     mutations: {
         increment: (state, value) => {
             state.count += value;
         }
     },
     actions: {
         add(context) {
             console.log(context)
             setTimeout(() =>{
                const val = parseInt(Math.random() * 100 + '');
                context.commit('increment', val)
             },3000)
         }
     },
     modules: {
         user: {
             namespaced: true,
             state: {
                 sysFlag: 0,
                 name: ''
             },
             mutations: {
                 changeUserMessage: function(state, value) {
                     state.sysFlag = value.sysFlag;
                     state.name = value.name
                 }
             },
             actions: {
                 getUserInfo: function(context) {
                    setTimeout(function() {
                        context.commit('changeUserMessage', {sysFlag: 10038001, name: 'wujianhai'});
                    })
                 }
             }
         }
     }
 });