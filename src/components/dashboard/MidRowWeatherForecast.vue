<template>
  <div>
    <v-row justify="center" class="subtitle-1 font-weight-light">
      {{
      parseInt(forecast.datetime.slice(5, 7)).toString() +
      "月" +
      parseInt(forecast.datetime.slice(8, 10)).toString() +
      "日"
      }}
    </v-row>
    <v-row justify="center">
      <v-icon x-large v-text="parseWeather.icon.mdi" :color="parseWeather.icon.color"></v-icon>
    </v-row>
    <v-row justify="center" class="subtitle-2">
      {{
      parseWeather.name
      }}
    </v-row>
    <v-row justify="center" class="caption grey--text">
      {{
      forecast.temperature + " °C"
      }}
    </v-row>
    <v-row justify="center" class="caption grey--text">
      {{
      forecast.wind_speed + " km/h"
      }}
    </v-row>
  </div>
</template>

<script>
import Misc from "@/misc/misc";
export default {
  props: { forecast: Object },
  computed: {
    parseWeather() {
      return Misc.translate_weather(this.forecast.condition);
    }
  }
};
</script>

<style></style>
