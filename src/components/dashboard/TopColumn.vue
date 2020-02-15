<template>
  <v-row class="mx-0">
    <v-col v-for="(card, i) in cards" :key="i" cols="12" md="6" lg="4" xl="3">
      <ValueCard
        :image="card.image"
        :icon="card.icon"
        :name="card.name"
        :value="i == 0 ? temp : i == 1 ? humi : i == 2 ? hcho : pm2d5"
        :unit="card.unit"
        :color="card.color"
      ></ValueCard>
    </v-col>
  </v-row>
</template>

<script>
import ValueCard from "@/components/dashboard/ValueCard";
import { mapstate, mapState } from "vuex";
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
          unit: "°C",
          color: "back_color_a"
        },
        {
          image: require("@/assets/image/cards/dot.png"),
          icon: "mdi-water-percent",
          name: "湿度",
          unit: "%",
          color: "back_color_b"
        },
        {
          image: require("@/assets/image/cards/circle.png"),
          icon: "mdi-hexagon-multiple-outline",
          name: "甲醛",
          unit: "mg/m³",
          color: "back_color_c"
        },
        {
          image: require("@/assets/image/cards/line.png"),
          icon: "mdi-blur",
          name: "PM2.5",
          unit: "μg/m³",
          color: "back_color_d"
        }
      ]
    };
  },

  computed: {
    ...mapState({
      entities: state => state.Global.entities
    }),
    temp() {
      if (this.entities.length > 0) {
        const res = this.entities.filter(entity => {
          return (
            entity.entity_id.indexOf("csro") != -1 &&
            entity.entity_id.indexOf("temp") != -1
          );
        });
        return res.length > 0 ? res[0].state : "N/A";
      } else {
        return "N/A";
      }
    },
    humi() {
      if (this.entities.length > 0) {
        const res = this.entities.filter(entity => {
          return (
            entity.entity_id.indexOf("csro") != -1 &&
            entity.entity_id.indexOf("humi") != -1
          );
        });
        return res.length > 0 ? res[0].state : "N/A";
      } else {
        return "N/A";
      }
    },
    hcho() {
      if (this.entities.length > 0) {
        const res = this.entities.filter(entity => {
          return (
            entity.entity_id.indexOf("csro") != -1 &&
            entity.entity_id.indexOf("hcho") != -1
          );
        });
        return res.length > 0 ? res[0].state : "N/A";
      } else {
        return "N/A";
      }
    },
    pm2d5() {
      if (this.entities.length > 0) {
        const res = this.entities.filter(entity => {
          return (
            entity.entity_id.indexOf("csro") != -1 &&
            entity.entity_id.indexOf("pm2d5") != -1
          );
        });
        return res.length > 0 ? res[0].state : "N/A";
      } else {
        return "N/A";
      }
    }
  },
  methods: {},
  mounted: function() {
    console.log(this.entities);
  }
};
</script>

<style scoped></style>
