<template>
  <v-card :height="cardheight">
    <v-carousel cycle height="100%" show-arrows-on-hover hide-delimiters>
      <v-carousel-item v-for="(serie, i) in series" :key="i">
        <apexchart
          type="area"
          :options="chartOption[i]"
          :series="serie"
          class="pr-3 pt-2"
          :height="cardheight - 20"
        ></apexchart>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {},
  data: function() {
    return {
      basicOption: {
        grid: { show: true },
        chart: {
          redrawOnParentResize: true,
          toolbar: {
            show: false
          }
        },
        tooltip: {
          enabled: true
        },
        xaxis: {
          type: "datetime",
          labels: { show: true, datetimeUTC: false }
        },
        stroke: {
          curve: "smooth",
          width: 3
        },
        dataLabels: {
          enabled: false
        },
        legend: { show: true, showForSingleSeries: true }
      }
    };
  },
  computed: {
    ...mapState({
      cardheight: state => state.rowheight.btm,
      history: state => state.Aqi.history
    }),
    chartOption() {
      return [
        {
          ...this.basicOption,
          colors: ["#2E93fA"],
          title: {
            text: "12小时温度",
            align: "center",
            floating: false,
            style: {
              fontSize: "14px",
              fontWeight: "light",
              color: "grey"
            }
          }
        },
        {
          ...this.basicOption,
          colors: ["#66DA26"],
          title: {
            text: "12小时湿度",
            align: "center",
            floating: false,
            style: {
              fontSize: "14px",
              fontWeight: "light",
              color: "grey"
            }
          }
        },
        {
          ...this.basicOption,
          colors: ["#00d49a"],
          title: {
            text: "12小时甲醛",
            align: "center",
            floating: false,
            style: {
              fontSize: "14px",
              fontWeight: "light",
              color: "grey"
            }
          }
        },
        {
          ...this.basicOption,
          title: {
            text: "12小时PM颗粒物",
            align: "center",
            floating: false,
            style: {
              fontSize: "14px",
              fontWeight: "light",
              color: "grey"
            }
          }
        }
      ];
    },
    series() {
      return [
        [
          {
            name: "温度",
            data: this.history.temp
          }
        ],
        [
          {
            name: "湿度",
            data: this.history.humi
          }
        ],
        [
          {
            name: "甲醛",
            data: this.history.hcho
          }
        ],
        [
          {
            name: "PM1",
            data: this.history.pm1
          },
          {
            name: "PM2.5",
            data: this.history.pm2d5
          },
          {
            name: "pm10",
            data: this.history.pm10
          }
        ]
      ];
    }
  },
  mounted() {},
  methods: {}
};
</script>
<style scoped></style>
