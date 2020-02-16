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
  methods: {},
  mounted: function() {}
};
</script>

<style scoped></style>
