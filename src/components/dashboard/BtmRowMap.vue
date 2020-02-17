<template>
  <v-card :height="cardheight">
    <div id="map_container" style="width: 100%;height: 100%"></div>
  </v-card>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      mapStyleKey: "b36ce2122a6721f2cd7e4b21a29ea172",
      mapKey: "b091f2b03e41018c9b5132219af6b594",
      map: null
    };
  },
  computed: {
    ...mapState({
      cardheight: state => state.rowheight.btm,
      entities: state => state.Global.entities
    })
  },
  mounted() {
    const aMapJs = document.getElementById("aMapJs");
    if (aMapJs !== undefined && aMapJs !== null) {
      this.createMap();
      this.loadMap();
    } else {
      window.mapOnLoad = () => {
        this.createMap();
        this.loadMap();
      };
      let jsScript = document.createElement("script");
      jsScript.charset = "utf-8";
      jsScript.src =
        "https://webapi.amap.com/maps?v=1.4.15&key=" +
        this.mapKey +
        "&callback=mapOnLoad";
      jsScript.id = "aMapJs";
      document.head.appendChild(jsScript);
    }
  },
  methods: {
    createMap: function() {
      if (this.map === undefined || this.map === null) {
        const mapConfig = {
          mapStyle: "amap://styles/" + this.mapStyleKey, //设置地图的显示样式
          resizeEnable: true, //自适应大小
          zoom: 11 //初始视窗
        };
        // eslint-disable-next-line
        this.map = new AMap.Map("map_container", mapConfig);
      }
    },
    loadMap() {
      //eslint-disable-next-line
      let trafficLayer = new AMap.TileLayer.Traffic({
        zIndex: 10
      });
      trafficLayer.setMap(this.map);

      // eslint-disable-next-line
      AMap.plugin("AMap.Geolocation", () => {
        window.console.log("AMap.Geolocation1");
        // eslint-disable-next-line
        let geolocation = new AMap.Geolocation({
          enableHighAccuracy: true, //是否使用高精度定位，默认:true
          convert: false,
          timeout: 10000, //超过10秒后停止定位，默认：5s
          buttonPosition: "RB", // eslint-disable-next-line
          buttonOffset: new AMap.Pixel(0, 0), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          showMarker: true, //定位成功后在定位到的位置显示点标记，默认：true
          showCircle: true, //定位成功后用圆圈表示定位精度范围，默认：true
          panToLocation: false, //定位成功后将定位到的位置作为地图中心点，默认：true
          zoomToAccuracy: false
        });
        this.map.addControl(geolocation);
        geolocation.getCurrentPosition();
        // eslint-disable-next-line
        AMap.event.addListener(geolocation, "complete", e => {
          // 定位成功之后再定位处添加一个marker
          window.console.log("AMap.Marker", e.position);

          // eslint-disable-next-line
          let icon = new AMap.Icon({
            // eslint-disable-next-line
            size: new AMap.Size(48, 48),
            image: location,
            // image:
            //     "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
            // eslint-disable-next-line
            imageSize: new AMap.Size(48, 48)
          });
          // eslint-disable-next-line
          let marker = new AMap.Marker({
            position: e.position, // （e.position）--->定位点的点坐标, position ---> marker的定位点坐标，也就是marker最终显示在那个点上，
            icon: icon, // marker的图标，可以自定义，不写默认使用高德自带的
            map: this.map // map ---> 要显示该marker的地图对象
          });
        });
        // eslint-disable-next-line
        AMap.event.addListener(geolocation, "error", e => {
          // 定位成功之后再定位处添加一个marker
          window.console.log("AMap.Marker-error", e);
        }); //返回定位出错信息
      });
    }
  },
  beforeDestroy() {
    window.console.log("高德地图卸载", this.map);

    if (this.map !== undefined && this.map !== null) {
      this.map.clearMap();
      this.map.destroy();
    }
  }
};
</script>
<style scoped>
</style>
