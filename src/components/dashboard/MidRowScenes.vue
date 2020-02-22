<template>
  <v-card :height="cardheight" style="overflow:hidden" class="pt-1">
    <v-list rounded dense>
      <v-list-item-group v-model="scenes" color="primary">
        <v-list-item v-for="(scene, i) in scenes" :key="i" color="red" class="back_color">
          <v-list-item-content>
            <v-list-item-title
              v-text="scene.attributes.friendly_name"
              class="d-flex justify-center white--text font-weight-light"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState({
      cardheight: state => state.rowheight.mid
    }),
    ...mapGetters({
      scenes: "Global/scenes"
    })
  }
};
</script>
<style scoped>
.back_color {
  background: -webkit-linear-gradient(top left, #4f89ff, #91beff);
}
</style>
