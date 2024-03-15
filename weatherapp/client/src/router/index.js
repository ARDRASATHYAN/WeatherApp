import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/Home.vue';
import SignIn from '../components/SingIn.vue';
import SignUp from '../components/SingUp.vue';

const routes = [
  {
    path: '/',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  }
];

const router = createRouter({
  history: createWebHistory('/myapp/'),
  routes
});

export default router;