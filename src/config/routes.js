import LayoutHome from "../Layouts/Home";
import LayoutAdmin from "../Layouts/Admin";

// Vistas de la página principal
import HomePage from "../Views/Home";
import RestDescription from "../Views/Home/RestaurantDescription";

// Vistas de las páginas del admin
import AdminPage from "../Views/Admin";
import RestDescriptionAdmin from "../Views/Admin/RestaurantDescription";
// Página de error
import ErrorPage from "../Views/Error";

const routes = [
  {
    path: "/admin",
    component: LayoutAdmin,
    exact: false,
    routes: [
      {
        path: "/admin",
        component: AdminPage,
        exact: true,
      },
      {
        path: "/admin/detail",
        component: RestDescriptionAdmin,
        exact: true,
      },
      {
        path: "*",
        component: ErrorPage,
      },
    ],
  },
  {
    path: "/",
    component: LayoutHome,
    exact: false,
    routes: [
      {
        path: "/",
        component: HomePage,
        exact: true,
      },
      {
        path: "/restaurant-description",
        component: RestDescription,
        exact: true,
      },
      {
        path: "*",
        component: ErrorPage,
      },
    ],
  },
];

export default routes;
