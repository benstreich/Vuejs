import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Aufgabe_1 from '../views/Pages/Aufgabe_1.vue'
import Aufgabe_2 from '../views/Pages/Aufgabe_2.vue'
import 任务一 from '../views/Pages/任务一.vue'
import 表格 from '../views/Pages/表格.vue'
import npc from '../views/Pages/npc.vue'




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
    },
    {
      path: '/任务一',
      name: '任务一',
      component: 任务一,
    },
    {
      path: '/表格',
      name: '表格',
      component: 表格,
    },
    {
      path: '/npc',
      name: 'npc',
      component: npc,
    }
  ]
})

export default router
