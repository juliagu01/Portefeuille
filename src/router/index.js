import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectView from '../views/ProjectView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import AboutView from '../views/AboutView.vue'

let routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectView
  },
]

let allImgs = []
const projects = require('@/data/projectData.json')
for (const project of projects) {
  allImgs = [...allImgs, ...project.imgs]
  routes.push(
    {
      path: '/projects' + project.path,
      name: project.name,
      component: PortfolioView,
      props: { photos: project.imgs }
    }
  )
}

routes.push(
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: PortfolioView,
    props: { photos: allImgs }
  }
)

routes.push(
  {
    path: '/about',
    name: 'About',
    component: AboutView
  }
)

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router