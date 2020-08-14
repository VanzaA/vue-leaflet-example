<template>
  <div style="height: 550px;">
    <l-map
      style="height: 90%; width: 100%"
      :zoom="zoom"
      :center="center"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
      @click="addPoint"
    >
      <l-tile-layer :url="url" ></l-tile-layer>

      <l-marker v-for="(point, index) in points" :lat-lng="point" v-bind:key="index" @click="removePoint(point)" />
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 14,
      center: [-34.9187, -57.956],
      points: [[-34.90349322, -57.9376459]]
    }
  },
  methods: {
    removePoint (point) {
      const index = this.points.indexOf(point)
      this.points.splice(index, 1)
    },
    addPoint (point) {
      this.points.push(point.latlng)
    },
    zoomUpdated (zoom) {
      console.log('zoom:', zoom)
    },
    centerUpdated (center) {
      console.log('latitud, longitud:', center)
    }
  }
}
</script>
