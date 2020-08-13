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

      <!--- Circulo que recibe color, radio y latitud, longitud -->
      <l-circle :lat-lng="circle.center" :radius="circle.radius" :color="circle.color" />

      <!--- Rectangulo que recibe arreglo con puntos (latitud, longitud) y estilos -->
      <l-rectangle :bounds="rectangle.bounds" :l-style="rectangle.style" />

      <!--- Polilinea que recibe arreglo con puntos (latitud, longitud) y color -->
      <l-polyline :lat-lngs="polyline.latlngs" :color="polyline.color" />

      <!--- Poligono que recibe arreglo puntos(latitud, longitud) y color -->
      <l-polygon :lat-lngs="polygon.latlngs" :color="polygon.color" />
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LCircle, LRectangle, LPolyline, LPolygon } from 'vue2-leaflet'

export default {
  components: {
    LMap,
    LTileLayer,
    LRectangle,
    LCircle,
    LPolyline,
    LPolygon
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 13,
      center: [-34.9187, -57.956],
      // ejemplo de parametros para el circulo
      circle: {
        center: [-34.903535, -57.93883],
        radius: 500,
        color: 'red'
      },
      // ejemplo de parametros para el rectangulo,
      // necesita definir esquina superior izquierda y esquina inferior derecha
      rectangle: {
        bounds: [[-34.91522353, -57.9612493], [-34.9225394, -57.94861]],
        style: { color: 'blue', weight: 3 }
      },
      // ejemplo de parametros para la polilinea,
      // se genera una linea entre cada punto
      polyline: {
        latlngs: [
          [-34.900882, -57.969167],
          [-34.908383, -57.9632556],
          [-34.90306428, -57.954512],
          [-34.894476, -57.95845985]
        ],
        color: 'green'
      },
      // ejemplo de parametros para el poligono,
      // se genera una linea entre cada punto (siempre se conecta el punto inicial con el final )
      polygon: {
        latlngs: [
          [-34.9435052, -57.9656749],
          [-34.949977, -57.955884],
          [-34.9503252, -57.9531598],
          [-34.9499954, -57.951089],
          [-34.949467, -57.949034],
          [-34.9424543, -57.941042],
          [-34.9323617, -57.953964]
        ],
        color: 'black'
      }
    }
  },
  methods: {
    zoomUpdated (zoom) {
      console.log(zoom)
    },
    centerUpdated (center) {
      console.log(center)
    }
  }
}
</script>
