import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Hhome from "../pages/home/Hhome";
import Menu from "../pages/shop/Menu"
import Signup from "../components/Signup";

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
    },{
      path:'/signup',
      element:<Signup/>
    }
  ]);
  export default router