import Vue from 'vue/dist/vue.js';
import VueResource from 'vue-resource/dist/vue-resource';
Vue.use(VueResource);
Vue.use(require('vue-moment'));

// Set the token headers
Vue.http.interceptors.push((request, next) => {
    request.headers.set('X-CSRF-Token',  $('meta[name="csrf-token"]').attr('content'));
    next();
});


/**
 * main instance
 */
new Vue({
    created: function(){

    }
});
