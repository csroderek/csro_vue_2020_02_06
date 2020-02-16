<template>
  <v-row class="mx-0" dense>
    <v-col cols="12" md="12" lg="4" xl="4">
      <MidRowWeather></MidRowWeather>
    </v-col>
    <v-col cols="12" md="12" lg="4" xl="4">
      <MidRowWeather></MidRowWeather>
    </v-col>
    <v-col cols="6" md="6" lg="2" xl="2">
      <MidRowWeather></MidRowWeather>
    </v-col>
    <v-col cols="6" md="6" lg="2" xl="2">
      <MidRowWeather></MidRowWeather>
    </v-col>
  </v-row>
</template>

<script>
import MidRowWeather from "@/components/dashboard/MidRowWeather";
import { mapState } from "vuex";
export default {
  name: "Dashboard",
  components: {
    MidRowWeather
  },
  data() {
    return {};
  },

  computed: {
    ...mapState({
      entities: state => state.Global.entities
    })
  },
  methods: {},
  mounted: function() {
    console.log(this.entities);
  }
};
</script>

<style scoped></style>