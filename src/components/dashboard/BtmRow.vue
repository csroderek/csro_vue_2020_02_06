<template>
  <v-row class="mx-0" dense>
    <v-col v-if="location != null" cols="12" md="12" lg="4" xl="4">
      <BtmRowMap :loc="location"></BtmRowMap>
    </v-col>
    <v-col cols="12" md="12" lg="4" xl="4">
      <BtmRowHistory :loc="location"></BtmRowHistory>
    </v-col>
    <v-col cols="6" md="6" lg="2" xl="2">
      <BtmRowDeviceCount></BtmRowDeviceCount>
    </v-col>
    <v-col cols="6" md="6" lg="2" xl="2">
      <BtmRowTimeline></BtmRowTimeline>
    </v-col>
  </v-row>
</template>

<script>
import BtmRowMap from "@/components/dashboard/BtmRowMap";
import BtmRowHistory from "@/components/dashboard/BtmRowHistory";
import BtmRowDeviceCount from "@/components/dashboard/BtmRowDeviceCount";
import BtmRowTimeline from "@/components/dashboard/BtmRowTimeline";
import { mapState } from "vuex";
export default {
  name: "Dashboard",
  components: {
    BtmRowMap,
    BtmRowHistory,
    BtmRowDeviceCount,
    BtmRowTimeline
  },
  data() {
    return {};
  },

  computed: {
    ...mapState({
      entities: state => state.Global.entities,
      history: state => state.Aqi.history
    }),
    location() {
      if (this.entities.length == 0) return null;
      const res = this.entities.filter(entity => {
        return entity.entity_id.indexOf("zone.") != -1;
      });
      return res.length > 0
        ? { lon: res[0].attributes.longitude, lat: res[0].attributes.latitude }
        : null;
    },
    history_data() {
      return null;
    }
  },
  methods: {},
  mounted: function() {}
};
</script>

<style scoped></style>
