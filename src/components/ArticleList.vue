<template>
  <div>
    <h1>My Blog</h1>
    <ul>
      <li v-for="article in articles" :key="article.id">
				<!-- <div><p>"{{ article }}"</p></div> -->
				<!-- <div><p>Title: "{{ article.title }}"</p></div> -->
        <h2>{{ article.title }}</h2>
				<div>{{ marked(article.content) }}</div>
        <ul>
          <li v-for="comment in article.comments" :key="comment.id">
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
import marked from 'marked';

export default {
  name: 'ArticleList',
  data() {
    return {
      articles: [],
    };
  },
  mounted() {
    axios.get('http://localhost:18000/api/articles')
      .then((response) => {
        this.articles = response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  computed: {
   markdownToHtml(md){
     return marked(md);
   }
 },
};
</script>
