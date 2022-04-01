<template>
  <div>
    <h3>posts visited count : {{ postVisit.pageVisitCount }}</h3>
    <ul id="example-1">
      <li v-for="(post, index) in postsArray" :key="index">
        <router-link :to="`/about/${post.id}`">{{ post.title }} </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      postsArray: [],
      postVisit: null,
    };
  },

  mounted() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      this.postsArray = response.data;

      this.postVisit = this.$store.state;
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
