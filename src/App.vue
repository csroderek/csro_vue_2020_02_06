<template>
  <v-app>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({}),
  beforeMount() {
    console.log("beforeMount");
    console.log(this.$store.state);
  }
};
</script>
