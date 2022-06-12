import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Portada from "../views/Portada";
import Animales from "../views/Animales";
import Cuerpo from "../views/Cuerpo";
import Fruver from "../views/Fruver";
import Pronombres from "../views/Pronombres";
import Saludos from "../views/Saludos";
import Numeros from "../views/Numeros";
import Colores from "../views/Colores";
import Act_Pronombres from "../views/Act_Pronombres";
import Act_Numeros from "../views/Act_Numeros";
import Act_Saludos from "../views/Act_Saludos";
import Act_Colores from "../views/Act_Colores";
import Act_Cuerpo from "../views/Act_Cuerpo";
import Act_Animales from "../views/Act_Animales";
import Act_Fruver from "../views/Act_Fruver";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/",
    name: "Portada",
    component: Portada,
  },
  {
    path: "/animales",
    name: "Animales",
    component: Animales,
  },
  {
    path: "/fruver",
    name: "Frutas y verduras",
    component: Fruver,
  },
  {
    path: "/cuerpo",
    name: "Cuerpo",
    component: Cuerpo,
  },
  {
    path: "/pronombres",
    name: "Pronombres",
    component: Pronombres,
  },
  {
    path: "/saludos",
    name: "Saludos",
    component: Saludos,
  },
  {
    path: "/numeros",
    name: "Numeros",
    component: Numeros,
  },
  {
    path: "/colores",
    name: "Colores",
    component: Colores,
  },
  {
    path: "/act_Animales",
    name: "Act_Animales",
    component: Act_Animales,
  },
  {
    path: "/act_Fruver",
    name: "Act_Fruver",
    component: Act_Fruver,
  },
  {
    path: "/act_Cuerpo",
    name: "Act_Cuerpo",
    component: Act_Cuerpo,
  },
  {
    path: "/act_Pronombres",
    name: "Act_Pronombres",
    component: Act_Pronombres,
  },
  {
    path: "/act_Colores",
    name: "Act_Colores",
    component: Act_Colores,
  },
  {
    path: "/act_Numeros",
    name: "Act_Numeros",
    component: Act_Numeros,
  },
  {
    path: "/act_Saludos",
    name: "Act_Saludos",
    component: Act_Saludos,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () =>
    //import(/* webpackChunkName: "about" */
    //"../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
