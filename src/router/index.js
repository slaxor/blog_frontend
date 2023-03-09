import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import ArticleList from '../components/ArticleList.vue';
import UserLogin from '../components/UserLogin.vue';
import UserLogout from '../components/UserLogout.vue';
import ArticleCreate from '../components/ArticleCreate.vue';


const routes = [
	{ path: '/', component: HomeView},
	{ path: '/articles', component: ArticleList},
	{ path: '/articles/create', component: ArticleCreate },
	{ path: '/login', component: UserLogin },
	{ path: '/logout', component: UserLogout },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
