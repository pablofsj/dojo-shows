import Vue from 'vue';
import VueRouter from 'vue-router';

import TvShows from '../components/TvShows'; 
import Show from '../components/Show'; 
import NotFound from '../components/NotFound'; 

Vue.use(VueRouter);   

export default new VueRouter({
    routes: [
        {
            path: '/', 
            component: TvShows,
            name: "TvShows"
        },

        {
            path: '/:id', 
            component: Show,
            name: "Show"
        },

        {
            path: '*',
            component: NotFound,
            name: "NotFound"

        }
    ]
})