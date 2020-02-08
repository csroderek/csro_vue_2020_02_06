<template>
  <div class="about">
    <h1>This is an about page</h1>
    <v-btn @click="delete_refresh">Delete refresh token</v-btn>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  methods: {
    delete_refresh() {
      localStorage.removeItem("refresh_token");
    },

    print() {
      this.axios
        .get("api/")
        .then(response => {})
        .catch(error => {});
    }
  }
};
</script>
