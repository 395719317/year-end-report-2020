<template>
  <div>
    <china-map
      :mapData="mapData"
      style="width: 100%;height: 50vh"
      :mapOption="{
            'title': '地图',
            'titleColor': 'pink'}"
    ></china-map>
  </div>
</template>

<script>
import chinaMap from "@/components/Map/ChinaChart";
export default {
  data() {
    return {
      mapData: [
        {
          // "flight_ids": "11,18,24",
          from: "保山",
          from_longitude: "118.90",
          from_latitude: "28.864",
          to: "南昌",
          to_longitude: "115.900",
          to_latitude: "28.864",
          num: 483
        },
        {
          from: "烟台",
          from_longitude: "128.48",
          from_latitude: "41.63",
          to: "沈阳",
          to_longitude: "123.48",
          to_latitude: "41.63",
          num: 237
        }
      ]
    };
  },

  components: { chinaMap },

  computed: {},

  methods: {}
};
</script>
<style lang='scss' scoped>
</style>