<template>
  <div id="app">
		<UserLogin />
    <PostList />
		<PostCreate />
  </div>
</template>

<script>
import UserLogin from './components/UserLogin.vue';
import PostList from './components/PostList.vue';
import PostCreate from './components/PostCreate.vue';

// const routes = [
  // { path: '/create', component: PostCreate },
  // other routes here
// ];
export default {
  name: 'App',
  components: {
		UserLogin,
    PostList,
    PostCreate,
  },
};
</script>
