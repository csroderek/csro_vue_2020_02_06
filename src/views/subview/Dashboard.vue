<template>
  <v-container fluid fill-height class="pa-1">
    <TopRow></TopRow>
    <MidRow></MidRow>
    <BtmRow></BtmRow>
  </v-container>
</template>

<script>
import TopRow from "@/components/dashboard/TopRow";
import MidRow from "@/components/dashboard/MidRow";
import BtmRow from "@/components/dashboard/BtmRow";
import { mapGetters, mapState, mapActions } from "vuex";
export default {
  name: "Dashboard",
  components: {
    TopRow,
    MidRow,
    BtmRow
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      history: "Aqi/get_aqi_history"
    })
  },
  computed: {},
  mounted() {
    this.history();
  }
};
</script>

<style scoped></style>
