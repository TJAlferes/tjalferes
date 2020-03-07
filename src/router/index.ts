import Vue from 'vue';
import Router from 'vue-router';

import Bio from '../components/Bio/Bio.vue';
import OilPaintings from '../components/OilPaintings/OilPaintings';
import WebApps from '../components/OilPaintings/WebApps';
import Articles from '../components/Articles/Articles.vue';
import Home from '../components/Home/Home.vue';
import NotFound from '../components/NotFound/NotFound.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  fallback: false,
  scrollBehavior: () => ({y: 0}),
  routes: [
    {path: '/bio', component: Bio},
    {path: '/oil-paintings', component: OilPaintings},
    {path: '/web-apps', component: WebApps},
    {path: '/articles', component: Articles},
    {path: '/home', component: Home},
    {path: '/', component: Home},
    {path: '*', component: NotFound}
  ]
});

export default router;