

import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import WhySolarView from './Views/WhySolarView.vue';
import HowItWorksView from './Views/HowItWorksView.vue';
import GetStartedView from './Views/GetStartedView.vue';
import SolarCalculator from './components/SolarCalculator.vue';
import OurServices from './components/OurServices.vue';
import OurMarket from './components/OurMarket.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
  
        {
          path: '/',
          component: () => import('@/Views/HomeView.vue')
        },
        { path: '/our-services', component: OurServices },
         { path: '/our-Market', component: OurMarket },
       
    { path: '/why-solar', component: WhySolarView },
    { path: '/how-it-works', component: HowItWorksView },
    { path: '/get-started', component: GetStartedView },
    { path: '/calculator', component: SolarCalculator},

  ],
});

const app = createApp(App);
app.use(router);
app.mount('#app');
