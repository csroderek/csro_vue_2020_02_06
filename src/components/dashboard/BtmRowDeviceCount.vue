<template>
  <v-card :height="cardheight" class="py-5">
    <apexchart type="donut" :options="chartOptions" :series="series" height="300px"></apexchart>
  </v-card>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  props: {},
  data() {
    return {
      chartOptions: {
        chart: {
          type: "donut"
        },
        labels: ["照明", "窗帘", "新风空调", "传感器", "场景"],
        dataLabels: {
          enabled: true,
          formatter: function(val, opts) {
            return opts.w.config.series[opts.seriesIndex];
          }
        },
        legend: {
          show: true,
          position: "bottom",
          itemMargin: {
            horizontal: 10,
            vertical: 0
          },
          onItemHover: {
            highlightDataSeries: true
          }
        }
      }
    };
  },
  computed: {
    ...mapState({
      cardheight: state => state.rowheight.btm,
      lights: state => state.Global.lights,
      covers: state => state.Global.covers,
      climates: state => state.Global.climates,
      sensors: state => state.Global.sensors,
      scenes: state => state.Global.scenes
    }),
    ...mapGetters({
      lights: "Global/lights",
      covers: "Global/covers",
      climates: "Global/climates",
      sensors: "Global/sensors",
      scenes: "Global/scenes"
    }),

    series() {
      return [
        this.lights.length,
        this.covers.length,
        this.climates.length,
        this.sensors.length,
        this.scenes.length
      ];
    }
  },
  mounted() {
    console.log(this.lights);
  },
  methods: {},
  beforeDestroy() {}
};
</script>
<style scoped></style>
