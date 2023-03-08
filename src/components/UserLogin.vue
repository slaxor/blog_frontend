<template>
  <div>
    <form>
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username">

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password">

      <button type="submit" @click.prevent="login">Log in</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      const data = {
        username: this.username,
        password: this.password,
      };

      axios.post('http://localhost:18000/api/login', data)
        .then((response) => {
          // store JWT token in local storage
					console.log(response.data);
          localStorage.setItem('jwtToken', response.data.data.token);
          // redirect to home page
          // this.$router.push('/');
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
