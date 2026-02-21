import { useState } from "react";
import NavBar from "../src/components/NavBar";
import { Outlet } from "react-router-dom";
function Index() {

    const [useCart, setCart] = useState([])
    const cartItems = useCart.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.times
    }, 0
    )
    return (
        <>
            <NavBar cartLength={cartItems} />
            <Outlet context={[useCart, setCart]} />
        </>
    )
}
export default Index