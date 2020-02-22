<template>
  <v-card :height="cardheight" style="overflow:hidden">
    <v-timeline class="overline" dense="">
      <v-timeline-item small="" class="csro_timeline" color="purple lighten-2">
        <v-row>21:30</v-row>
        <v-row>
          客厅吸顶灯
          <v-icon small="" color="orange">mdi-weather-sunny</v-icon>
        </v-row>
      </v-timeline-item>
      <v-timeline-item small="">
        <v-row>21:30</v-row>
        <v-row>
          客厅吸顶灯
          <v-icon small="" color="orange">mdi-weather-sunny</v-icon>
        </v-row></v-timeline-item
      >
      <v-timeline-item small="">
        <v-row>21:30</v-row>
        <v-row>
          客厅吸顶灯
          <v-icon small="" color="orange">mdi-weather-sunny</v-icon>
        </v-row></v-timeline-item
      >
      <v-timeline-item small="" class="csro_timeline" color="purple lighten-2">
        <v-row>21:30</v-row>
        <v-row>
          客厅吸顶灯
          <v-icon small="" color="orange">mdi-weather-sunny</v-icon>
        </v-row>
      </v-timeline-item>
      <v-timeline-item small="" class="csro_timeline" color="purple lighten-2">
        <v-row>21:30</v-row>
        <v-row>
          客厅吸顶灯
          <v-icon small="" color="orange">mdi-weather-sunny</v-icon>
        </v-row>
      </v-timeline-item>
      <v-timeline-item small="" class="csro_timeline" color="purple lighten-2">
        <v-row>21:30</v-row>
        <v-row>
          客厅吸顶灯
          <v-icon small="" color="orange">mdi-weather-sunny</v-icon>
        </v-row>
      </v-timeline-item>
      <v-timeline-item small="" class="csro_timeline" color="purple lighten-2">
        <v-row>21:30</v-row>
        <v-row>
          客厅吸顶灯
          <v-icon small="" color="orange">mdi-weather-sunny</v-icon>
        </v-row>
      </v-timeline-item>
    </v-timeline>
  </v-card>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapState({
      cardheight: state => state.rowheight.btm
    }),
    ...mapGetters({})
  },
  mounted() {},
  methods: {},
  beforeDestroy() {}
};
</script>

<style scoped>
.v-timeline-item__body {
  min-width: 320px;
}
.csro_timeline {
  display: flex;
  flex-direction: row;
  padding-bottom: 16px;
  position: relative;
  overflow: hidden;
}
</style>
