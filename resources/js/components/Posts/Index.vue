<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Post text</th>
                <th scope="col">Created at</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="post in posts.data">
                <td>{{post.title}}</td>
                <td>{{post.post_text}}</td>
                <td>{{post.created_at}}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <pagination
            :data="posts"
            @pagination-change-page="getResults"
          ></pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      posts: {},
    };
  },
  mounted() {
    this.getResults();
  },
  methods: {
    getResults(page = 1) {
      axios.get("/api/posts?page=" + page).then((response) => {
        this.posts = response.data;
      });
    },
  },
};
</script>
