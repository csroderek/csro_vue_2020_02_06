<template>
  <div>
    <v-navigation-drawer v-model="drawer" app clipped color="#46526b">
      <LeftDrawer />
    </v-navigation-drawer>
    <v-app-bar app clipped-left dense>
      <v-app-bar-nav-icon style="color: #00aebc" @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        <v-img class="d-flex" src="../assets/image/login/logo.png" />
      </v-toolbar-title>
      <v-spacer />
      <v-icon color="#00aebc" class="mr-4">mdi-clock-outline</v-icon>
      <span class="hidden-sm-and-down">{{ datetime }}</span>
    </v-app-bar>
    <v-content class="content">
      <v-container fluid fill-height>
        <router-view />
      </v-container>
    </v-content>
    <v-footer app class="justify-center">
      <span class="center-text">&copy; CSRO 2020</span>
    </v-footer>
  </div>
</template>

<script>
import misc from "../misc/misc";
import LeftDrawer from "../components/LeftDrawer";
import { mapState } from "vuex";
export default {
  components: { LeftDrawer },
  name: "Home",
  data: () => ({
    drawer: true,
    datetime: null
  }),
  methods: {},
  computed: {},
  created() {
    setInterval(() => {
      this.datetime = misc.getDateTime();
    }, 1000);
  }
};
</script>

<style></style>
