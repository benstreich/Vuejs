import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Aufgabe_1 from '../views/Pages/Aufgabe_1.vue'
import Aufgabe_2 from '../views/Pages/Aufgabe_2.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/aufgabe_1',
      name: 'Aufgabe 1',
      component: Aufgabe_1,
    },

    {
      path: '/aufgabe_2',
      name: 'Aufgabe 2',
      component: Aufgabe_2,
    }
  ]
})

export default router
