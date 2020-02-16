<template>
  <v-card :height="cardheight" class="scroll_bar">
    <v-list rounded>
      <v-list-item-group v-model="lights" color="primary">
        <v-list-item
          v-for="(light, i) in lights"
          :key="i"
          color="white"
          class="back_color"
        >
          <v-list-item-content>
            <v-list-item-title
              v-text="light.attributes.friendly_name"
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
    lights() {
      if (this.entities.length == 0) return [];
      const res = this.entities.filter(entity => {
        return entity.entity_id.indexOf("light.") != -1;
      });
      return res.length > 0 ? res : [];
    },
    covers() {
      if (this.entities.length == 0) return [];
      const res = this.entities.filter(entity => {
        return entity.entity_id.indexOf("cover.") != -1;
      });
      return res.length > 0 ? res : [];
    }
  }
};
</script>
<style scoped>
.back_color {
  background: -webkit-linear-gradient(top right, #4da7ff, #45c2ff);
}

.scroll_bar {
  overflow-y: scroll;
  overflow-x: hidden;
}
.scroll_bar::-webkit-scrollbar {
  display: none;
}
</style>
