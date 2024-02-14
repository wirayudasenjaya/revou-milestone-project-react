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
    mock: true,
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
    mock: true,
  },
];

export { protectedRoutes, publicRoutes };
