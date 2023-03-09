<template>
  <nav>
    <router-link to="/">Home</router-link> |
		
    <router-link v-if="loggedin" to="/articles/create">New Post</router-link> |
		<router-link to="/login">Login</router-link> ||
    <router-link to="/logout">Logout</router-link> ||
  </nav>
	<div id="app"></div>
  <router-view/>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
		loggedin() {
			Object.prototype.hasOwnProperty.call(localStorage, "jwtToken")
		}
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
