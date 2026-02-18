import { Link } from "react-router-dom"
import styles from "./NavBar.module.css"
function NavBar({ cartLength }) {
    return (
        <div className={styles.container}>
            <Link to={'/home'}>
                <h1>Shopping Cart</h1>
            </Link>
            <div className={styles.ulDiv}>
                <ul>
                    <Link to={'shop'}><li>Shop</li></Link>
                    <Link to={'cart'}><li>Cart {cartLength}</li></Link>
                </ul>
            </div>

        </div>
    )
}
export default NavBar