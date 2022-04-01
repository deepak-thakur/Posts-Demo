<template>
  <div class="about">
    <div>
      <table>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
        <tr>
          <td>{{ postDetailArray.id }}</td>
          <td>{{ postDetailArray.title }}</td>
          <td>{{ postDetailArray.body }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      postID: this.$route.params.id,
      postDetailArray: {},
    };
  },

  mounted() {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${this.postID}`)
      .then((response) => {
        this.postDetailArray = response.data;
      });
    this.increaseCount();
  },
  methods: {
    increaseCount() {
      this.$store.dispatch("update");
    },
  },
};
</script>
<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>
