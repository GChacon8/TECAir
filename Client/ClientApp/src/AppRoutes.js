import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import Client_view from "./components/Client_view";
import Create_user from'./components/Create_user';
import Promotion_view from "./components/Promotion_view";

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
    path: '/Create_user',
    element: <Create_user />
  }
  ,
  {
    path: '/Promotions',
    element: <Promotion_view />
  }
];

export default AppRoutes;
