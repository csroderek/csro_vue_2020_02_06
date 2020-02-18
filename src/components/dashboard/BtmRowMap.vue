<template>
  <v-card :height="cardheight">
    <div id="container" style="width: 100%;height: 100%"></div>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
import MapLoader from "@/plugins/amap.js";
export default {
  props: {
    loc: {
      lon: { default: 117.000923 },
      lat: { default: 36.675807 }
    }
  },
  data() {
    return {
      map: null
    };
  },
  computed: {
    ...mapState({
      cardheight: state => state.rowheight.btm
    })
  },
  mounted() {
    MapLoader().then(
      AMap => {
        this.map = new AMap.Map("container", {
          center: [this.loc.lon, this.loc.lat],
          mapStyle: "amap://styles/whitesmoke",
          zoom: 14
        });
        let traffic = new AMap.TileLayer.Traffic({
          zooms: [3, 17],
          autoRefresh: true,
          interval: 180
        });
        let marker = new AMap.Marker({
          position: new AMap.LngLat(this.loc.lon, this.loc.lat),
          title: "Home"
        });
        this.map.add(traffic);
        this.map.add(marker);
      },
      error => {
        console.log(error);
      }
    );
  },
  methods: {},
  beforeDestroy() {
    this.map.destroy();
  }
};
</script>
<style scoped></style>
