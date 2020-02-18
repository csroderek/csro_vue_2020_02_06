<template>
  <v-card :height="cardheight">
    <apexchart :options="chartOptions" :series="series" class="pa-3" height="300px"></apexchart>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {},
  data: function() {
    return {
      chartOptions: {
        grid: { show: true },
        chart: {
          width: "200px",
          height: "100px",
          toolbar: { show: false },
          redrawOnParentResize: false,
          type: "area",
          id: "vuechart-example"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        },
        stroke: {
          curve: "smooth"
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 35, 50, 49, 60, 70, 91]
        }
      ]
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
