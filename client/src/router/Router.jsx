import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Hhome from "../pages/home/Hhome";
import Menu from "../pages/shop/Menu"

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
          path:"/",
          element:<Hhome/>
        },
        {
          path:"/menu",
          element:<Menu/>
        }
      ]
    },
  ]);
  export default router