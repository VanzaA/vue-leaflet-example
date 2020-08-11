<template>

  <div style="height: 550px;">
    <div class="info" style="height: 15%">
      <span>Centro: {{ center }}</span>
      <br/>
      <span>Zoom: {{ zoom }}</span>
      <br/>
    </div>
    <l-map
      style="height: 90%; width: 100%"
      :zoom="zoom"
      :center="center"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
    >
      <l-tile-layer :url="url"></l-tile-layer>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer } from 'vue2-leaflet'

export default {
  components: {
    LMap,
    LTileLayer
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 14,
      center: [-34.9187, -57.956],
      bounds: null
    }
  },
  methods: {
    zoomUpdated (zoom) {
      this.zoom = zoom
    },
    centerUpdated (center) {
      // center devuelve un objeto con las claves latitud y longitud
      // con hacer this.center = center alcanza, yo solo agregue estas funciones matematicas
      // para que se vea mejor en la vista
      this.center = [Math.round(center.lat * 10000) / 10000, Math.round(center.lng * 10000) / 10000]
    },
    boundsUpdated (bounds) {
      console.log(bounds)
      this.bounds = bounds
    }
  }
}
</script>
