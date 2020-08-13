<template>
  <div style="height: 550px;">
    <l-map
      style="height: 90%; width: 100%"
      :zoom="zoom"
      :center="center"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
    >
      <l-tile-layer :url="url" ></l-tile-layer>

      <!-- Esto es un marcador -->
      <l-marker :lat-lng="markerLatLng">
        <!-- Esto es un tooltip que aparece al pasar el mouse sobre el marcador -->
        <l-tooltip>Sanguchan!</l-tooltip>
      </l-marker>

      <!-- Esto es un marcador con forma de circulo -->
      <l-circle-marker
        :lat-lng="circle.center"
        :radius="circle.radius"
        :color="circle.color"
      >
        <!-- Esto es un popup que aparece al clickear sobre el circulo -->
        <l-popup>Plaza Moreno!</l-popup>
      </l-circle-marker>

      <!-- Esto es un marcador con un icono personalizado -->
      <l-marker :lat-lng="customMarker">
        <l-popup>Facultad de informatica!</l-popup>
        <l-icon
          :icon-size="iconSize"
          :icon-url="require('../../assets/logo-unlp-info.png')"
        >
        </l-icon>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LTooltip, LCircleMarker, LPopup, LIcon } from 'vue2-leaflet'

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip,
    LCircleMarker,
    LPopup,
    LIcon
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 14,
      center: [-34.9187, -57.956],
      markerLatLng: [-34.908904, -57.94429],
      customMarker: [-34.90349322, -57.9376459],
      circle: {
        center: [-34.921333256, -57.954597],
        radius: 20,
        color: 'red'
      },
      iconSize: [35, 35]
    }
  },
  methods: {
    zoomUpdated (zoom) {
      console.log('zoom:', zoom)
    },
    centerUpdated (center) {
      console.log('latitud, longitud:', center)
    }
  }
}
</script>
