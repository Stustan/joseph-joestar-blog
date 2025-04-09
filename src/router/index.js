import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Post from '../views/Post.vue';
import Genealogy from '../views/Genealogy.vue';
import Biography from '../views/Biography.vue';
import Contact from '../views/Contact.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: Post
  },
  {
    path: '/genealogy',
    name: 'Genealogy',
    component: Genealogy
  },
  {
    path: '/biography',
    name: 'Biography',
    component: Biography
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router; 