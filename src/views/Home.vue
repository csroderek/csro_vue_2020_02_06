<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped=""
      color="#46526b"
    ></v-navigation-drawer>
    <v-app-bar app clipped-left dense="">
      <v-app-bar-nav-icon
        style="color: #00aebc"
        @click.stop="drawer = !drawer"
      />
      <v-spacer />
      <span>{{ datetime }}</span>
    </v-app-bar>
    <v-content class="content">
      <v-container fluid fill-height>
        <router-view />
      </v-container>
    </v-content>
    <v-footer app class="justify-center">
      <v-card-text>&copy; CSRO 2020</v-card-text>
    </v-footer>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Home",
  data: () => ({
    drawer: true,
    datetime: null
  }),
  methods: {},
  computed: {},
  created() {
    setInterval(() => {
      this.datetime = new Date();
    }, 1000);
  }
};
</script>

<style></style>
