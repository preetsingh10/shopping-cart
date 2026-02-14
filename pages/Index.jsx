import { useState } from "react";
import NavBar from "../src/components/Navbar";
import { Outlet } from "react-router-dom";

function Index(){
    
const [useCart, setCart] = useState(["apple"])
    return (
        <>
        <NavBar/>
       <Outlet context={[useCart]}/> 
        </>
    )
}
export default Index