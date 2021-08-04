<template>
  <div>
    <div class="container">
      <form @submit.prevent="submit">
        <div class="form-group">
          <label for="title">Title</label>
          <input
            type="text"
            class="form-control"
            id="title"
            name="title"
            v-model="fields.title"
            placeholder="Enter title"
          >
        </div>
        <div class="form-group">
          <label for="post_text">Post text</label>
          <input
            type="text"
            class="form-control"
            id="post_text"
            name="post_text"
            v-model="fields.post_text"
            placeholder="Enter title"
          >
        </div>
        <div class="form-group">
          <label for="category_id">Category</label>
          <select
            name="category_id"
            id="category_id"
            class="form-control"
            v-model="fields.category_id"
          >
            <option value="">Seleccione</option>
            <option
              :value="category.id"
              v-for="category in categories"
            >{{category.name}}
            </option>
          </select>
        </div>
        <button
          type="submit"
          class="btn btn-primary"
        >Submit
        </button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      categories: [],
      fields: {
        title: "",
        post_text: "",
        category_id: "",
      },
    };
  },
  mounted() {
    axios.get("/api/categories").then((response) => {
      this.categories = response.data.data;
    });
  },
  methods: {
    submit() {
      axios.post("/api/posts", this.fields).then((response) => {
        this.$router.push("/");
      });
    },
  },
};
</script>
