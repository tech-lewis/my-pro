import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../views/Home.vue";
import NotFoundPage from "../views/404.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/user",
    name: "homepage",
    component: () =>
      import(/* webpackChunkName: "layout" */ "../layouts/UserLayout.vue"),
    children: [
      {
        path: "/user",
        redirect: "/user/login", //从定向到登录页面的
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/User/Login.vue")
      },
      {
        path: "/user/login",
        name: "login",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/User/Login.vue")
      },
      {
        path: "/user/reg",
        name: "register",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/User/Register.vue")
      }
    ]
  },
  {
    path: "/404",
    component: () => import("../views/404")
  },
  // 抄袭老师的路由配置哦 dashboard   form 表单的使用 basically和step-form等等表单
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "layout" */ "../layouts/BasicLayout.vue"),
    children: [
      // 仪表盘的路由
      {
        path: "/",
        redirect: "/dashboard/analysis"
      },
      {
        path: "/dashboard",
        name: "dashboard",
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ "../views/dashboard/index.vue"
          ),
        children: [
          // 仪表盘的路由地下的二级
          {
            path: "/dashboard/analysis",
            name: "Analysis",
            component: () =>
              import(
                /* webpackChunkName: "dashboard" */ "../views/dashboard/Analysis.vue"
              )
          }
        ]
      },
      // 表单的路由设置
      {
        path: "/form",
        name: "form",
        component: () =>
          import(/* webpackChunkName: "dashboard" */ "../views/form/index.vue"),
        //component: { render: h => h("router-view") },
        children: [
          {
            path: "/form/basic-form",
            name: "basic-form",
            component: () =>
              import(
                /* webpackChunkName: "form" */ "../views/form/BasicForm.vue"
              )
          },
          {
            path: "/form/step-form",
            name: "step-form",
            component: () =>
              import(/* webpackChunkName: "form" */ "../views/form/StepForm"),
            children: [
              {
                path: "/form/step-form",
                redirect: "/form/step-form/info"
              },
              {
                path: "/form/step-form/info",
                name: "info",
                component: () =>
                  import(
                    /* webpackChunkName: "form" */ "../views/form/StepForm/Step1.vue"
                  )
              },
              {
                path: "/form/step-form/confirm",
                name: "confirm",
                component: () =>
                  import(
                    /* webpackChunkName: "form" */ "../views/form/StepForm/Step2.vue"
                  )
              },
              {
                path: "/form/step-form/result",
                name: "result",
                component: () =>
                  import(
                    /* webpackChunkName: "form" */ "../views/form/StepForm/Step3.vue"
                  )
              }
            ]
          }
        ]
      }
      //
    ]
  },

  // 脚手架里面的内容
  {
    path: "*",
    name: "404",
    component: NotFoundPage
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];
// history模式没有那个hash的#
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
