import Home from "./pages/Home.jsx"
import Shop from "./pages/Shop"
import Index from "./pages/Index.jsx"
import Cart from "./pages/Cart"
const routes = [
    {
        path:"/",
        element:<Index/>
    },
    {
        path:"home",
        element: <Home/>
    },
    {
        path: "/cart",
        element: <Cart/>
    },
    {
        path: "/shop",
        element: <Shop/>
    }
]
export default routes