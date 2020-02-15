<template>
  <div>
    <h1>About</h1>
    <v-btn @click.prevent="clear">Clear Refresh</v-btn>
  </div>
</template>

<script>
export default {
  name: "About",
  methods: {
    clear() {
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("access_token");
      this.$store.state.User.access_token = "";
      this.$store.state.User.refresh_token = "";
    }
  },
  computed: {}
};
</script>
