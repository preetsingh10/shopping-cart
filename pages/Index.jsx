import NavBar from "../src/components/Navbar";
import { Outlet } from "react-router-dom";

function Index(){
    return (
        <>
        <NavBar/>
       <Outlet/> 
        </>
    )
}
export default Index