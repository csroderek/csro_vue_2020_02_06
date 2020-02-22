<template>
  <v-data-table
    :headers="headers"
    :items-per-page="10"
    :items="desserts"
    class="elevation-1"
    :height="cardheight"
    hide-default-footer
  ></v-data-table>

  <!-- <v-card :height="cardheight">

  </v-card>-->
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  props: {},
  data() {
    return {
      headers: [
        { text: "设备", align: "left", sortable: false, value: "calories" },
        { text: "时间", align: "left", sortable: false, value: "fat" },
        { text: "动作", align: "left", sortable: false, value: "carbs" }
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%"
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%"
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%"
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%"
        },
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%"
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%"
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%"
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%"
        },
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%"
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%"
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%"
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%"
        }
      ]
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
