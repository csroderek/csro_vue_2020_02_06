<template>
  <v-card :height="cardheight">
    <v-tabs v-model="tab" background-color="#1dc9dd" dark centered grow height="40">
      <v-tab class="font-weight-light">
        <v-icon class="mr-2">mdi-brightness-7</v-icon>灯光
      </v-tab>
      <v-tab class="font-weight-light">
        <v-icon class="mr-2">mdi-script-outline</v-icon>窗帘
      </v-tab>
      <v-tab class="font-weight-light">
        <v-icon class="mr-2">mdi-history</v-icon>最近
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-card flat class="scroll_bar" :height="cardheight-48">
          <v-list dense class="pa-0 ma-0">
            <template v-for="(light, index) in lights">
              <v-divider v-if="index!=0" :key="index" inset></v-divider>
              <v-list-item
                :ripple="false"
                :key="light.attributes.friendly_name"
                style="height:55px !important"
                @click.stop="details"
              >
                <v-list-item-avatar height="25">
                  <v-icon :color="light.state=='on' ? 'orange' : 'grey'">mdi-brightness-7</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title v-text="light.attributes.friendly_name" class="grey--text"></v-list-item-title>
                </v-list-item-content>
                <v-switch
                  inset
                  color="orange"
                  :input-value="light.state=='on'"
                  @click.stop="switch_light(light.entity_id, light.state)"
                ></v-switch>
              </v-list-item>
            </template>
          </v-list>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat class="scroll_bar" :height="cardheight-48">
          <v-list dense class="pa-0 ma-0">
            <template v-for="(cover, index) in covers">
              <v-divider v-if="index!=0" :key="index" inset></v-divider>
              <v-list-item
                :key="cover.attributes.friendly_name"
                style="height:55px !important"
                @click.stop="details"
              >
                <v-list-item-avatar height="25">
                  <v-icon color="blue">mdi-window-shutter</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title v-text="cover.attributes.friendly_name" class="grey--text"></v-list-item-title>
                </v-list-item-content>
                <v-btn fab depressed x-small dark color="#1dc9dd">
                  <v-icon>mdi-arrow-up</v-icon>
                </v-btn>
                <v-btn depressed class="mx-1" fab x-small dark color="#1dc9dd">
                  <v-icon dark>mdi-minus</v-icon>
                </v-btn>
                <v-btn depressed fab x-small dark color="#1dc9dd">
                  <v-icon dark>mdi-arrow-down</v-icon>
                </v-btn>
              </v-list-item>
            </template>
          </v-list>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      tab: null,
      items: [
        {
          icon: "folder",
          iconClass: "grey lighten-1 white--text",
          title: "Photos",
          subtitle: "Jan 9, 2014"
        },
        {
          icon: "folder",
          iconClass: "grey lighten-1 white--text",
          title: "Recipes",
          subtitle: "Jan 17, 2014"
        },
        {
          icon: "folder",
          iconClass: "grey lighten-1 white--text",
          title: "Work",
          subtitle: "Jan 28, 2014"
        }
      ]
    };
  },
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
  },
  methods: {
    switch_light(id, state) {
      console.log("switch light!", id, state);
      this.$store.dispatch("Global/socket_send", {
        type: "call_service",
        domain: "light",
        service: state == "on" ? "turn_off" : "turn_on",
        service_data: { entity_id: id }
      });
    },
    details() {
      console.log("show details!");
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
