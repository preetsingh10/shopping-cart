import { Link } from "react-router-dom"
import styles from "./NavBar.module.css"
import CartIcon from "../assets/CartIcon"
import ShopIcon from "../assets/ShopIcon"
function NavBar({ cartLength }) {
    return (
        <div className={styles.container}>
            <Link to={'/home'}>
                <h1>Cartify</h1>
            </Link>
            <div className={styles.ulDiv}>
                <ul>

                    <Link to={'shop'}><li>
                        <ShopIcon />
                        <span>Shop</span></li></Link>
                    
                    <Link to={'cart'}><li className={styles.cartIconContainer}>
                        <div className={styles.cartItemNumbers}>{cartLength}</div>
                        <CartIcon />
                        Cart</li>
                    </Link>
                </ul>
            </div>

        </div>
    )
}
export default NavBar