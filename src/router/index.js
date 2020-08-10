import Vue from 'vue';
import VueRouter from 'vue-router';

import TvShows from '../components/TvShows'; 
import Show from '../components/Show'; 
import EditShow from '../components/EditShow'; 
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
            path: '/:id/editshow', 
            component: EditShow,
            name: "EditShow"
        },



        {
            path: '*',
            component: NotFound,
            name: "NotFound"

        }
    ]
})