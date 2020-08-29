## Ejemplo básico

Para generar un mapa hay 2 componentes principales a tener en cuenta:

- Lmap
- LTileLayer

Para utilizarlos hay que hacer 2 cosas, incluir los componentes y registrarlos:
```js
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
      center: [-34.9187, -57.956]
    }
  }

  // ...resto del codigo
```

Luego en el template para visualizarlos hay que utilizar las siguientes etiquetas html:

```html
<template>
  <l-map
    style="height: 90%; width: 100%"
    :zoom="zoom"
    :center="center"
  >
  <!--
    l-map es el componente principal para los mapas
    todo lo que se quiera agregar ya sea una capa, un marcador, figuras entre otros va adentro
    de l-map como el l-tile-layer
  -->
    <l-tile-layer :url="url"></l-tile-layer>
  </l-map>
</template>
```
Nota a tener en cuenta: `<l-map>` es el componente principal y todo los otros componentes para utilizarse tienen que utilizarse como hijos de este componente como en el caso de `<l-tile-layer>`.

Las propiedades zoom y center son indicadas en `<l-map>` son utilizadas para definir la altura a la que aparece el mapa y el centro en el que esta posicionado (latitud y longitud) respectivamente.

También es necesario indicar una capa para utilizar en `<l-tile-layer>` con la propiedad url la cual le indica de donde buscar esa capa, se pueden obtener de google-maps, open-street-maps, entre otros.

A su vez, `<l-map>` entiende propiedades como  `@update:zoom` y `@update:center` las cuales aceptan una función y recibe como argumento el zoom como el centro(latitud y longitud) respectivamente.


Si se quiere utilizar otros componentes como marcadores, figuras y demas, es necesario incluirlos, registrarlos y utilizarlos como hijos de `<l-map>`.

Referencias:
- Lista de componentes existentes de Leaflet: https://vue2-leaflet.netlify.app/components/
- Lmap: https://vue2-leaflet.netlify.app/components/LMap.html#demo
- LTileLayer: https://vue2-leaflet.netlify.app/components/LTileLayer.html