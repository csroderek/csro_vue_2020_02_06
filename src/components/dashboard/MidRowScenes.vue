<template>
  <v-card :height="cardheight" style="overflow:hidden" class="py-3">
    <v-list rounded>
      <v-list-item-group v-model="scenes" color="primary">
        <v-list-item
          v-for="(scene, i) in scenes"
          :key="i"
          color="white"
          class="back_color"
        >
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
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      cardheight: state => state.rowheight.mid,
      entities: state => state.Global.entities
    }),
    scenes() {
      if (this.entities.length == 0) return [];
      const res = this.entities.filter(entity => {
        return entity.entity_id.indexOf("scene.") != -1;
      });
      return res.length > 0 ? res.slice(0, 5) : [];
    }
  }
};
</script>
<style scoped>
.back_color {
  background: -webkit-linear-gradient(top right, #4da7ff, #45c2ff);
}
</style>
