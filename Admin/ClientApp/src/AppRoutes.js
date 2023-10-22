import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import Admin_view from "./components/Admin_view";
import Checkin from "./components/Checkin";
import Login from "./components/Login";

const AppRoutes = [
  {
    index: true,
    element: <Login />
  },
  {
    path: '/Login',
    element: <Login />
  },
  {
    path: '/Admin_view',
    element: <Admin_view />
  },
  {
    path: '/Checkin',
    element: <Checkin />
  }
];

export default AppRoutes;
