# Ejemplos mapas
Ejemplos de mapas usando [Vue](https://vue2-leaflet.netlify.app/) y [Leaflet](https://leafletjs.com/)

### Guia de como generar un proyecto vue
La guia va a mostrar como hacerlo tanto con [yarn](https://yarnpkg.com/) como con [npm](https://www.npmjs.com/)

Para instalar Vue-CLI (herramienta para generar proyectos vue) dicho :

```bash
# yarn
yarn add --dev @vue/cli

# npm
npm install --save-dev @vue/cli
```

Una vez instalada la dependencia, se puede generar el proyecto de la siguiente manera:

```bash
# yarn
yarn vue create ruta/al/proyecto

# npm
$(npm bin)/vue create ruta/al/proyecto
```

Una vez ejecutado el comando, aparece una interfaz que te permite elegir entre una configuración por defecto o una mas personalizable como por ejemplo instalar babel, eslint, vue-router entre otros.
Luego de haber seleccionado una configuración, automáticamente empezara a instalar todos los paquetes y generara el proyecto.

Para correr el proyecto solo falta acceder al proyecto `cd ruta/al/proyecto` y ejecutar:

```bash
# yarn
yarn serve

# npm
npm run serve
```


#

### Guia para agregar Leaflet en Vue:

Para agregar leaflet al proyecto es necesario posicionarse en el proyecto `cd ruta/al/proyecto` y ejecutar:

```bash
# yarn
yarn add leaflet vue2-leaflet

# npm
npm install leaflet vue2-leaflet --save
```

Una vez instaladas las dependencias, hay que importar los estilos de leaflet en el archivo principal `main.js`:

```js
import Vue from 'vue'
import App from './App.vue'
// Archivo de estilos
import 'leaflet/dist/leaflet.css'

// Resto del código
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
```

Luego para utilizar componentes como el mapa, capaz y marcadores entre otros, es necesario incluir los componentes y registrarlos:

```js
// Si necesitas referenciar "L" como por ejemplo "L.icon", es necesario importarlo explicitamente en tu componente
import L from 'leaflet';
// A su vez para importar el mapa, marcadores y capaz entre todo
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';

export default {
  name: 'MyAwesomeMap',
  // y para registrarlos hay que agregarlos aca
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
};
```

Un problema muy común es que a los marcadores no funcionen los iconos, para eso es necesario hacer lo siguiente en el archivo principal `main.js` :

```js
import Vue from 'vue'
import App from './App.vue'
import 'leaflet/dist/leaflet.css'
// incluir Icon de leaflet:
import { Icon } from 'leaflet'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

// y agregar esto:
delete Icon.Default.prototype._getIconUrl
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})
```

Referencias:

- Crear un proyecto vue: __https://cli.vuejs.org/guide/creating-a-project.html#vue-create__
- Instalar leaflet: __https://vue2-leaflet.netlify.app/quickstart/#installation__

#


## Para probar este proyecto, es necesario clonarlo y hacer lo siguiente para correrlo:

Instalar las dependencias:

```bash
# yarn
yarn install

# npm
npm install
```

Y para correrlo:

```bash
# yarn
yarn serve

# npm
npm run serve
```

El puerto utilizado por defecto es 8080

`http://localhost:8080`
