import Home from "./pages/Home.jsx"
import Shop from "./pages/Shop"
import Index from "./pages/Index.jsx"
import Cart from "./pages/Cart"
const routes = [
    {
        path:"/",
        element:<Index/>,
        children:[
              {
        index: true,
        element: <Home/>
    },
    {
        path: "/cart",
        element: <Cart/>
    },
    {
        path: "/shop",
        element: <Shop/>
    },
    {
        path: "/home",
        element: <Home/>
    }
        ]
    },
  
]
export default routes