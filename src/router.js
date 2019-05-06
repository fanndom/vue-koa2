import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/Pagingform",
      name: "pagingform",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Pagingform.vue")
    },
    {
      path: "/Login",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Login.vue")
    },
    {
      path: "/Tabpage",
      name: "tabpage",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Tabpage.vue")
    },
    {
      path: "/Pictureupload",
      name: "pictureupload",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Pictureupload.vue")
    },
    {
      path: "/Publisharticles",
      name: "publisharticles",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Publisharticles.vue")
    },
    {
      path: "/Exportexcel",
      name: "exportexcel",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Exportexcel.vue")
    },
    {
      path: "/Exitsystem",
      name: "exitsystem",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Exitsystem.vue")
    }
  ]
});
