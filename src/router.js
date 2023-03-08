// import * as Vue from 'vue';
// import * as VueRouter from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router'
// there is also createWebHashHistory and createMemoryHistory

// import your components here
import App from './App.vue';
import PostList from './components/PostList.vue';
import UserLogin from './components/UserLogin.vue';
import PostCreate from './components/PostCreate.vue';

// Vue.use(VueRouter);

const routes = [
  { path: '/', component: App},
  { path: '/posts', component: PostList},
  { path: '/create', component: PostCreate },
  { path: '/login', component: UserLogin },
];

export default createRouter({
  history: createWebHistory(),
  routes
})

