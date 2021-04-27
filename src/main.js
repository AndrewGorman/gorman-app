import Vue from 'vue';
import App from './App.vue';
import router from './router';
import * as TastyBurgerButton from 'vue-tasty-burgers';
import {library} from '@fortawesome/fontawesome-svg-core';
import {
    faMapMarkerAlt,
    faCheeseburger,
    faCalendarAlt,
    faListUl,
} from '@fortawesome/pro-light-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

library.add(
    faMapMarkerAlt,
    faCheeseburger,
    faCalendarAlt,
    faListUl,
);

Vue.use(TastyBurgerButton);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
    router,
    render: function(h) {
        return h(App);
    }
}).$mount('#app');
