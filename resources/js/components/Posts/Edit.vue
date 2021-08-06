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
          <div
            class="alert alert-danger"
            v-if="errors && errors.title"
          >
            {{errors.title[0]}}
          </div>
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
          <div
            class="alert alert-danger"
            v-if="errors && errors.post_text"
          >
            {{errors.post_text[0]}}
          </div>
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
              v-for="category in categories"
              :value="category.id"
            >{{category.name}}
            </option>
          </select>
          <div
            class="alert alert-danger"
            v-if="errors && errors.category_id"
          >
            {{errors.category_id[0]}}
          </div>
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
      errors: {},
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

    axios.get("/api/posts/" + this.$route.params.id).then((response) => {
      this.fields = response.data.data;
    });
  },
  methods: {
    submit() {
      axios
        .put("/api/posts/" + this.$route.params.id, this.fields)
        .then((response) => {
          this.$router.push("/");
        })
        .catch((error) => {
          if (error.response.status == 422) {
            this.errors = error.response.data.errors;
          }
        });
    },
  },
};
</script>
