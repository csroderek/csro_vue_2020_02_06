<template>
  <v-card :height="cardheight">
    <v-img :src="image" height="100%" class="align-center" :class="color">
      <v-row class="ma-auto align-self-center">
        <v-col cols="3">
          <v-row justify="center" class="my-3">
            <v-icon v-text="icon" color="white" large></v-icon>
          </v-row>
          <v-row justify="center" class="white--text">{{ name }}</v-row>
        </v-col>
        <v-col cols="6" align-self="center">
          <v-row justify="center" class="display-1 white--text">
            {{ value }}
            <span class="title ml-2 mt-2" style="opacity:0.7">
              {{
              unit
              }}
            </span>
          </v-row>
        </v-col>
        <v-col cols="3"></v-col>
      </v-row>
    </v-img>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    image: String,
    icon: String,
    name: String,
    value: String,
    unit: String,
    color: { default: "back_color_b" }
  },
  computed: {
    ...mapState({
      cardheight: state => state.rowheight.top
    })
  }
};
</script>

<style>
.back_color_a {
  background: -webkit-linear-gradient(top left, #35d8df, #04b9dc);
}
.back_color_b {
  background: -webkit-linear-gradient(top right, #4f89ff, #91beff);
}
.back_color_c {
  background: -webkit-linear-gradient(top right, #4da7ff, #45c2ff);
}
.back_color_d {
  background: -webkit-linear-gradient(top right, #00d49a, #2ecdd2);
}
</style>
