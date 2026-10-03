import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import ProductsView from './views/ProductsView.vue';
import ProductView from './views/ProductView.vue';
import CartView from './views/CartView.vue';
import CheckoutView from './views/CheckoutView.vue';
import SignupView from './views/SignupView.vue';
import LoginView from './views/LoginView.vue';
import AccountView from './views/AccountView.vue';
import TestingLabView from './views/TestingLabView.vue';

const routes = [
  { path:'/', component:HomeView, meta:{title:'Nivora Living'} },
  { path:'/products', component:ProductsView, meta:{title:'Collection | Nivora Living'} },
  { path:'/products/:slug', component:ProductView, meta:{title:'Product | Nivora Living'} },
  { path:'/cart', component:CartView, meta:{title:'Cart | Nivora Living'} },
  { path:'/checkout', component:CheckoutView, meta:{title:'Checkout | Nivora Living'} },
  { path:'/signup', component:SignupView, meta:{title:'Signup | Nivora Living'} },
  { path:'/login', component:LoginView, meta:{title:'Login | Nivora Living'} },
  { path:'/account', component:AccountView, meta:{title:'Account | Nivora Living'} },
  { path:'/testing-lab', component:TestingLabView, meta:{title:'Testing Lab | Nivora Living'} },
  { path:'/:pathMatch(.*)*', redirect:'/' },
];
const router = createRouter({ history:createWebHistory(), routes, scrollBehavior:()=>({top:0}) });
router.afterEach((to)=>{ document.title = to.meta.title || 'Nivora Living'; });
export default router;
