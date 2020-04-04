import Vue from 'vue';
import Router from 'vue-router';

import Bio from '../components/Bio/Bio.vue';

import Painting from '../components/Painting/Painting';
import Paintings from '../components/Paintings/Paintings';

import WebApp from '../components/WebApp/WebApp';
import WebApps from '../components/WebApps/WebApps';

import Article from '../components/Article/Article.vue';
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

    {path: '/painting/:title', component: Painting},
    {path: '/paintings/:category', component: Paintings},

    {path: '/webapp/:name', component: WebApp},
    {path: '/webapps', component: WebApps},

    {path: '/article/:slug', component: Article},
    {path: '/articles/:category', component: Articles},

    {path: '/home', component: Home},
    {path: '/', component: Home},

    {path: '*', component: NotFound}
  ]
});

export default router;