<template>
  <v-row class="mx-0" dense>
    <v-col cols="12" lg="4">
      <v-row class="ma-0">
        <v-col cols="7" class="pa-0">
          <MidRowWeather></MidRowWeather>
        </v-col>
        <v-col cols="5" class="pa-0 pl-2">
          <MidRowScenes></MidRowScenes>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" lg="4">
      <MidRowWeather></MidRowWeather>
    </v-col>
    <v-col cols="12" lg="4">
      <MidDeviceLists></MidDeviceLists>
    </v-col>
  </v-row>
</template>

<script>
import MidRowWeather from "@/components/dashboard/MidRowWeather";
import MidRowScenes from "@/components/dashboard/MidRowScenes";
import MidDeviceLists from "@/components/dashboard/MidDeviceLists";
import { mapState } from "vuex";
export default {
  name: "Dashboard",
  components: {
    MidRowWeather,
    MidRowScenes,
    MidDeviceLists
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
