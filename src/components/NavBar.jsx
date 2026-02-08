import { Link } from "react-router-dom"
function NavBar() {
    return (
        <>
            <h1>Shopping Cart</h1>
            <ul>
                <Link to={'/home'}> <li>Home</li></Link>

                <Link to={'shop'}><li>Shop</li></Link>
                <Link to={'cart'}><li>Cart</li></Link>
            </ul>
        </>
    )
}
export default NavBar