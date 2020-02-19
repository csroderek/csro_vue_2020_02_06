<template>
  <v-card :height="cardheight" style="overflow:hidden">
    <v-row style="height:40%; overflow:hidden" class="back_color ma-0 pa-1">
      <v-col cols="5" class="pa-0" style="height:100%">
        <v-icon
          color="white"
          size="90"
          class="ml-n8 mt-n8"
          style="position:absolute; opacity:0.4; z-index:0"
          v-text="parseWeather.icon.mdi"
        ></v-icon>
        <v-row justify="center" class="my-3">
          <v-icon v-text="parseWeather.icon.mdi" :color="parseWeather.icon.color" size="50"></v-icon>
        </v-row>
        <v-row no-gutters class="pa-0">
          <v-col cols="12" class="d-flex justify-center white--text">
            <div class="headline mx-1">{{ weather[0].attributes.temperature }}</div>
            <span class="subtitle-2 mt-2" style="opacity:0.7">°C</span>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="7" class="pa-2" style="height:100%">
        <v-row justify="center" class="white--text title font-weight-light">
          {{
          clock.month + "月" + clock.day + "日"
          }}
        </v-row>
        <v-row justify="center" class="my-1 white--text title">
          {{
          parseWeather.name
          }}
        </v-row>
        <v-row
          justify="center"
          class="white--text subtitle-1"
        >风速 {{ weather[0].attributes.wind_speed }} km/h</v-row>
      </v-col>
    </v-row>
    <v-row v-if="forecasts.length >= 3" style="height:60%" class="ma-0 py-1">
      <v-col cols="4" align-self="center">
        <MidRowWeatherForecast :forecast="forecasts[0]"></MidRowWeatherForecast>
      </v-col>
      <v-divider vertical />
      <v-col cols="4" class="mx-n1" align-self="center">
        <MidRowWeatherForecast :forecast="forecasts[1]"></MidRowWeatherForecast>
      </v-col>
      <v-divider vertical />
      <v-col cols="4" align-self="center">
        <MidRowWeatherForecast :forecast="forecasts[2]"></MidRowWeatherForecast>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Misc from "@/misc/misc";
import MidRowWeatherForecast from "@/components/dashboard/MidRowWeatherForecast";
export default {
  components: { MidRowWeatherForecast },
  computed: {
    ...mapState({
      cardheight: state => state.rowheight.mid,
      entities: state => state.Global.entities,
      clock: state => state.Global.clock
    }),
    ...mapGetters({
      weather: "Global/weather"
    }),
    parseWeather() {
      if (this.weather.length == 0) return null;
      return Misc.translate_weather(this.weather.state);
    },
    forecasts() {
      if (this.entities.length == 0) return [];
      const res = this.entities.filter(entity => {
        return entity.entity_id.indexOf("weather") != -1;
      });
      return res.length > 0 ? res[0].attributes.forecast : [];
    }
  },
  data() {
    return {};
  }
};
</script>

<style>
.back_color {
  background: -webkit-linear-gradient(top right, #00d49a, #2ecdd2);
}
</style>
