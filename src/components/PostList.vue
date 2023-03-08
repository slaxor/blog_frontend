<template>
  <div>
    <h1>My Blog</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
				<!-- <div><p>"{{ post }}"</p></div> -->
				<!-- <div><p>Title: "{{ post.title }}"</p></div> -->
        <h2>{{ post.title }}</h2>
        <p>{{ post.content }}</p>
        <ul>
          <li v-for="comment in post.comments" :key="comment.id">
						<div><p>{{ comment }}</p></div>
            <strong>{{ comment.author }}:</strong> {{ comment.content }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'PostList',
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    axios.get('http://localhost:18000/api/posts')
      .then((response) => {
        this.posts = response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
