import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    user: {
      name: 'Filip',
      rank: 98,
      projects: 32,
      earnings: 8350,
      earningsChange: 10, 
    },
    yourProjects: [
      { id: 1, name: 'Logo design for Bakery', daysRemaining: 1, person: 'https://via.placeholder.com/40' },
      { id: 2, name: 'Personal branding project', daysRemaining: 5, person: 'https://via.placeholder.com/40' },
    ],
    recentInvoices: [
      { id: 1, name: 'Alexander Williams', company: 'JQ Holdings', amount: 1200.87, status: 'Paid', avatar: 'https://via.placeholder.com/40' },
      { id: 2, name: 'John Philips', company: 'Inchor Techs', amount: 12989.88, status: 'Late', avatar: 'https://via.placeholder.com/40' },
    ],
    recommendedProject: {
      name: 'Need a designer to form branding essentials for my business.',
      description:
        'Looking for a talented brand designer to create all the branding materials for my new startup.',
      budget: 8700,
      time: 'Full time',
      author: 'Thomas Martin',
      design: 'Design',
      updated: '10m ago',
      avatar: 'https://via.placeholder.com/40',
    },
  }),
  getters: {
    formattedEarnings: (state) => `€${state.user.earnings.toLocaleString()}`,
  },
})
