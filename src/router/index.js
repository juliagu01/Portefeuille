import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PortfolioView from '../views/PortfolioView.vue'

let routes = [
  {
    path: '/',
    name: 'Projects',
    component: HomeView
  },
]

const projects = require('@/data/projectData.json')
for (const project of projects)
  routes.push({ path: '/projects' + project.path, name: project.name, component: PortfolioView, props: { photos: project.imgs } })

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router