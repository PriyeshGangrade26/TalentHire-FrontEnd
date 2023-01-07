import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import JobsView from "../views/JobsView.vue";
import PostJobsView from "../views/PostJobsView.vue";
import JobsDetailsShowView from "../views/JobsDetailsShowView.vue";
import EditJobsView from "../views/EditJobsView.vue";
import FetchJobsView from "../views/FetchJobsView.vue";
import ReviewView from "../views/ReviewView.vue";
import PageNotFoundView from "../views/PageNotFoundView.vue";
import { authGuard } from "../auth/authGuard";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
    // beforeEnter: authGuard,
  },
  {
    path: "/jobs",
    name: "JobsView",
    component: JobsView,
    beforeEnter: authGuard,
  },

  {
    path: "/add-post",
    name: "add-post",
    component: PostJobsView,
    beforeEnter: authGuard,
  },
  {
    path: "/post/:id",
    name: "post",
    component: JobsDetailsShowView,
    beforeEnter: authGuard,
  },
  {
    path: "/edit-post/:id",
    name: "edit-post",
    component: EditJobsView,
    beforeEnter: authGuard,
  },
  {
    path: "/company",
    name: "FetchJobsView",
    component: FetchJobsView,
    beforeEnter: authGuard,
  },
  {
    path: "/reviews",
    name: "ReviewView",
    component: ReviewView,
    beforeEnter: authGuard,
  },
  {
    path: "*",
    name: "PageNotFoundView",
    component: PageNotFoundView,
    // beforeEnter: authGuard,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "HomeView",
      component: HomeView,
      // beforeEnter: authGuard,
    },
    {
      path: "/jobs",
      name: "JobsView",
      component: JobsView,
      beforeEnter: authGuard,
    },

    {
      path: "/add-post",
      name: "add-post",
      component: PostJobsView,
      beforeEnter: authGuard,
    },
    {
      path: "/post/:id",
      name: "post",
      component: JobsDetailsShowView,
      beforeEnter: authGuard,
    },
    {
      path: "/edit-post/:id",
      name: "edit-post",
      component: EditJobsView,
      beforeEnter: authGuard,
    },
    {
      path: "/company",
      name: "FetchJobsView",
      component: FetchJobsView,
      beforeEnter: authGuard,
    },
    {
      path: "/reviews",
      name: "ReviewView",
      component: ReviewView,
      beforeEnter: authGuard,
    },
    {
      path: "*",
      name: "PageNotFoundView",
      component: PageNotFoundView,
      // beforeEnter: authGuard,
    },
  ],
  linkActiveClass: "active",
});

export default router;
