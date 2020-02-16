<template>
  <div>
    <v-row justify="center" class="subtitle-1 font-weight-light">{{
      parseInt(forecast.datetime.slice(5, 7)).toString() +
        "月" +
        parseInt(forecast.datetime.slice(8, 10)).toString() +
        "日"
    }}</v-row>
    <v-row justify="center">
      <v-icon x-large color="blue">{{
        "mdi-weather-" + forecast.condition
      }}</v-icon>
    </v-row>
    <v-row justify="center">{{
      forecast.condition.replace(
        forecast.condition[0],
        forecast.condition[0].toUpperCase()
      )
    }}</v-row>
    <v-row justify="center" class="caption grey--text font-weight-light">{{
      forecast.temperature + " °C"
    }}</v-row>
    <v-row justify="center" class="caption grey--text font-weight-light">{{
      forecast.wind_speed + " km/h"
    }}</v-row>
  </div>
</template>

<script>
export default {
  props: { forecast: Object }
};
</script>

<style></style>
