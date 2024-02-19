import AddItemPage from "../pages/AddItemPage";
import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const protectedRoutes = [
  {
    path: "/",
    component: DashboardPage,
  },
  {
    path: "/dashboard",
    component: DashboardPage,
  },
  {
    path: "/dashboard/add",
    component: AddItemPage,
  },
];

const publicRoutes = [
  {
    path: "/",
    component: RegisterPage,
  },
  {
    path: "/register",
    component: RegisterPage,
  },
  {
    path: "/login",
    component: LoginPage,
  },
];

export { protectedRoutes, publicRoutes };
