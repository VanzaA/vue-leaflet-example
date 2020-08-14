import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ejemploBasico from '../components/Mapa-basico/Mapa-basico.vue'
import ejemploFiguras from '../components/Figuras/Figuras.vue'
import ejemploMarcadoresDinamicos from '../components/Marcadores/Marcadores-dinamicos.vue'
import ejemploMarcadoresEstaticos from '../components/Marcadores/Marcadores-estaticos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/mapa-basico',
    name: 'mapa-basico',
    component: ejemploBasico
  },
  {
    path: '/figuras',
    name: 'figuras',
    component: ejemploFiguras
  },
  {
    path: '/marcadores-estaticos',
    name: 'marcadores-estaticos',
    component: ejemploMarcadoresEstaticos
  },
  {
    path: '/marcadores-dinamicos',
    name: 'marcadores-dinamicos',
    component: ejemploMarcadoresDinamicos
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
