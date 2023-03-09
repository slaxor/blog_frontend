<template>
  <div>
    <h1>Create Article</h1>
    <form>
      <label for="title">Title:</label>
      <input type="text" id="title" v-model="title">

      <label for="content">Content:</label>
      <textarea id="content" v-model="content"></textarea>

      <button type="submit" @click.prevent="createArticle">Create Article</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      title: '',
      content: '',
    };
  },
  methods: {
    createArticle() {
      const jwtToken = localStorage.getItem('jwtToken');
      if (!jwtToken) {
        // redirect to login page
        this.$router.push('/login');
        return;
      }

      const data = {
        title: this.title,
        content: this.content,
      };

      axios.article('http://localhost:18000/api/articles', data, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
        .then((response) => {
          console.log(response.data);
          // redirect to home page
          this.$router.push('/');
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
