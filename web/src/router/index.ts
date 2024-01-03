import { createRouter, createWebHistory } from "vue-router";
import SignInView from "../pages/auth/sign-in.vue";
import SignUpView from "../pages/auth/sign-up.vue";
import NotFoundView from "../pages/not-found.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../pages/dashboard.vue"),
      meta: {
        title: 'Dashboard'
      }
    },
    {
      path: "/sign-in",
      name: "signIn",
      component: () => SignInView,
      meta: {
        title: 'Sign In'
      }
    },
    {
      path: "/sign-up",
      name: "signUp",
      component: () => SignUpView,
      meta: {
        title: 'Sign Up'
      }
    },
    {
      path: "/:notFound",
      component: () => NotFoundView,
      meta: {
        title: 'Not Found'
      }
    },
  ],
});

export default router;
