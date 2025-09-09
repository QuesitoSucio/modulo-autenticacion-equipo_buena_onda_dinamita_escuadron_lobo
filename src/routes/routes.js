import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/views/Dashboard.vue'
import ProjectsView from '@/views/Projects.vue'
import InvoicesView from '@/views/Invoices.vue'
import ReportsView from '@/views/Reports.vue'

const routes = [
  { path: '/', name: 'dashboard', component: DashboardView },
  { path: '/projects', name: 'projects', component: ProjectsView },
  { path: '/invoices', name: 'invoices', component: InvoicesView },
  { path: '/reports', name: 'reports', component: ReportsView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
