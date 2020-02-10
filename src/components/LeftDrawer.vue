<template>
  <v-list two-line>
    <v-list-item-group v-model="model" active-class="leftborder" color="#00abbe">
      <v-list-item v-for="(item, i) in items" :key="i" :to="item.path">
        <v-list-item-icon class="my-6">
          <v-icon v-text="item.icon" color="white" />
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" class="white--text"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  name: "LeftDrawer",
  data: function() {
    return {
      model: 1,
      items: [
        {
          title: "新风环境",
          icon: "mdi-leaf",
          path: "/airsystem"
        },
        {
          title: "信息总览",
          icon: "mdi-clipboard-list-outline",
          path: "/"
        },
        {
          title: "场景模式",
          icon: "mdi-clover",
          path: "/"
        },
        { title: "房间区域", icon: "mdi-collage", path: "/" },

        {
          title: "室外天气",
          icon: "mdi-weather-sunny",
          path: "/weather"
        },
        {
          title: "设备管理",
          icon: "mdi-settings-outline",
          path: "/"
        },
        { title: "关于我们", icon: "mdi-information", path: "/about" }
      ]
    };
  }
};
</script>

<style scoped>
.leftborder {
  border-left: 4px solid #00abbe;
}
</style>