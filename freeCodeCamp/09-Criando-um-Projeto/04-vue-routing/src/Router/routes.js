import Login from "@/Authentication/Login.vue"
import Contact from "@/Home/Contact.vue"
import HomePage from "@/Home/HomePage.vue"
import NoAccess from "@/Layout/NoAccess.vue"
import NotFound from "@/Layout/NotFound.vue"
import ProductDetails from "@/Products/ProductDetails.vue"
import ProductList from "@/Products/ProductList.vue"
import { createRouter, createWebHistory } from "vue-router"

function isAuthenticated() {
  const isAuthenticated = false
  if (isAuthenticated) {
    return true
  }
  return { name: "no-access" }
}

function isAdmin() {
  const isAdmin = false
  if (isAdmin) {
    return true
  }
  return { name: "no-access" }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    {
      // rota redirecionada
      path: "/contact-us",
      redirect: "contact",
    },
    {
      path: "/productList",
      name: "product-list",
      component: ProductList,
    },
    {
      // Rota com props
      path: "/product/:productId?/:categoryId?",
      name: "product-details",
      // código rodado antes de entrar na rota (executa as duas funções e a rota só acontece se as duas retornarem verdadeiro)
      beforeEnter: [isAdmin, isAuthenticated],
      component: ProductDetails,
      props: true,
    },
    {
      path: "/product",
      name: "product-details-none",
      component: ProductDetails,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/noAccess",
      name: "no-access",
      component: NoAccess,
    },
    {
      path: "/:catchAll(.*)",
      component: NotFound,
    },
  ],
  linkActiveClass: "active", // adiciona uma classe no router-link com a rota ativa
})

router.beforeEach((to, from) => {
  // console.log("Global before each")
  // console.log(from, to)
  // não deixa o usuário navegar nas páginas de produtos antes de estar autenticado (isAuthenticated estar setado para true)
  const isAuthenticated = true
  if (!isAuthenticated) {
    switch (to.name) {
      case "home":
        return true
        break
      case "contact":
        return true
      case "login":
        return true
      default:
        return { name: "login" }
    }
  }
})

export default router
