import LayoutHome from "../Layouts/Home";

// Vistas de la página principal
import HomePage from "../Views/Home";
import RestDescription from "../Views/Home/RestaurantDescription";

// Página de error
import ErrorPage from "../Views/Error";

const routes = [
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
