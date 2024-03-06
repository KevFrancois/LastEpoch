import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BuildsPageVue from '@/views/BuildsPage.vue'
import SentinelBuilds from '@/views/SentinelBuilds.vue'
import RogueBuilds from '@/views/RogueBuilds.vue'
import PrimalistBuilds from '@/views/PrimalistBuilds.vue'
import MageBuilds from '@/views/MageBuilds.vue'
import AcolyteBuilds from '@/views/AcolyteBuilds.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Builds',
      name: 'Builds',
      component: BuildsPageVue
    },
    {
      path: '/Builds/Sentinel',
      name: 'Sentinel Builds',
      component: SentinelBuilds
    },
    {
      path: '/Builds/Rogue',
      name: 'Rogue Builds',
      component: RogueBuilds
    },
    {
      path: '/Builds/Mage',
      name: 'Mage Builds',
      component: MageBuilds
    },
    {
      path: '/Builds/Primalist',
      name: 'Primalist Builds',
      component: PrimalistBuilds
    },
    {
      path: '/Builds/Acolyte',
      name: 'Acolyte Builds',
      component: AcolyteBuilds
    }
  ]
})

export default router
