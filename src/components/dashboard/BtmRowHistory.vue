<template>
  <v-card :height="cardheight" class="red"> </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    loc: {
      lon: { default: 117.000923 },
      lat: { default: 36.675807 }
    }
  },
  data() {
    return {
      map: null,
      count: 123
    };
  },
  computed: {
    ...mapState({
      cardheight: state => state.rowheight.btm
    })
  },
  mounted() {},
  methods: {}
};
</script>
<style scoped></style>
