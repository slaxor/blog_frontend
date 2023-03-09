<template>
  <div>
		<p>{{username}}</p>
      <button @click.prevent="logout">Logout</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
    };
  },
  methods: {
    logout() {
			localStorage.removeItem("jwtToken");
      // const data = {
      //  username: this.username,
      // };
    },
  },
};
</script>
