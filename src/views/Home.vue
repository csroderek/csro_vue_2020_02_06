<template>
  <div class="home">
    <v-btn @click="print">Print</v-btn>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  methods: {
    print() {
      console.log(this.$store.getters.isAuthenticated);
    }
  }
};
</script>
