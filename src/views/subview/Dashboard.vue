<template>
  <v-row class="ml-0">
    <v-col v-for="(card, index) in cards" :key="index" cols="12" md="6" lg="4" xl="3">
      <ValueCard
        :image="card.image"
        :icon="card.icon"
        :name="card.name"
        :value="card.value"
        :unit="card.unit"
      ></ValueCard>
    </v-col>
  </v-row>
</template>

<script>
import ValueCard from "@/components/dashboard/ValueCard";
export default {
  name: "Dashboard",
  components: {
    ValueCard
  },
  data() {
    return {
      cards: [
        {
          image: require("@/assets/image/cards/wave.png"),
          icon: "mdi-home-thermometer-outline",
          name: "温度",
          value: "23.5",
          unit: "°C"
        },
        {
          image: require("@/assets/image/cards/dot.png"),
          icon: "mdi-home-thermometer-outline",
          name: "湿度",
          value: "56",
          unit: "%"
        },
        {
          image: require("@/assets/image/cards/circle.png"),
          icon: "mdi-home-thermometer-outline",
          name: "甲醛",
          value: "0.002",
          unit: "°C"
        },
        {
          image: require("@/assets/image/cards/line.png"),
          icon: "mdi-home-thermometer-outline",
          name: "PM2.5",
          value: "36",
          unit: "μg/m³"
        }
      ]
    };
  },
  methods: {},
  mounted: function() {}
};
</script>

<style scoped>
</style>


