import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import Client_view from "./components/Client_view";
import Login_view from "./components/Login";
import Create_user from'./components/Create_user';
import Admin_view from './components/Admin_view';
import Checkin_view from './components/Checkin';

const AppRoutes = [
  {
    index: true,
    element: <Client_view />
  },
  {
    path: '/Client_view',
    element: <Client_view />
  },
  {
    path: '/Login',
    element: <Login_view />
  },
  {
    path: '/Create_user',
    element: <Create_user />
  },
  {
    path: '/Admin_view',
    element: <Admin_view />
  },
  {
    path: '/Checkin',
    element: <Checkin_view />
  }
];

export default AppRoutes;
