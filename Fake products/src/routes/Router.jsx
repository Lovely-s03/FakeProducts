import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
// import Cart from "../pages/Cart";
// import Home from "../pages/Home"

const Home = lazy(()=>import("../pages/Home"))
const Cart =lazy(()=>import("../pages/Cart"))
import Layout from "../components/Layout";
export const routes=createBrowserRouter([
    {
            path:"/",
    element:<Layout/>,
    children:[
        {
           index:true,
           element:<Home/>
        },
        {
            path:"/cart",
            element:<Cart/>,
        }
    ]
}
])