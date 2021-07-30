<template>
  <div>
    <div class="container">
      <div class="row mt-3">
        <div class="col-md-4">
          <select
            name="category_id"
            id="category_id"
            v-model="category_id"
            class="form-control"
          >
            <option value="">Select an option</option>
            <option
              v-for="category in categories"
              :value="category.id"
            >{{category.name}}
            </option>
          </select>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-12">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">
                  <a
                    href="#"
                    @click.prevent="changeSort('title')"
                  >Title</a>
                  <span>&uarr;</span>
                  <span>&darr;</span>
                </th>
                <th scope="col">
                  <a
                    href="#"
                    @click.prevent="changeSort('post_text')"
                  >Post text</a>
                  <span>&uarr;</span>
                  <span>&darr;</span>
                </th>
                <th scope="col">
                  <a
                    href="#"
                    @click.prevent="changeSort('created_at')"
                  >Created at</a>
                  <span>&uarr;</span>
                  <span>&darr;</span>
                </th>
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
      categories: [],
      category_id: "",
      sort_field: "created_at",
      sort_direction: "desc",
    };
  },
  mounted() {
    this.getResults();

    axios.get("/api/categories").then((response) => {
      this.categories = response.data.data;
    });
  },
  watch: {
    category_id(value) {
      this.getResults();
    },
  },
  methods: {
    getResults(page = 1) {
      axios
        .get(
          "/api/posts?page=" +
            page +
            "&category_id=" +
            this.category_id +
            "&sort_field=" +
            this.sort_field +
            "&sort_direction=" +
            this.sort_direction
        )
        .then((response) => {
          this.posts = response.data;
        });
    },

    changeSort(field) {
      if (this.sort_field == field) {
        this.sort_direction = this.sort_direction === "asc" ? "desc" : "asc";
      } else {
        this.sort_field = field;
        this.sort_direction = "asc";
      }
      this.getResults();
    },
  },
};
</script>
