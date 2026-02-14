import { useState } from "react";
import NavBar from "../src/components/Navbar";
import { Outlet } from "react-router-dom";

function Index(){
    
const [useCart, setCart] = useState([])
    return (
        <>
        <NavBar cartLength ={useCart.length}/>
       <Outlet context={[useCart, setCart]}/> 
        </>
    )
}
export default Index