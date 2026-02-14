import { Link } from "react-router-dom"
import styles from "./NavBar.module.css"
function NavBar() {
    return (
        <div className={styles.container}>
            <h1>Shopping Cart</h1>
            <div className={styles.ulDiv}>
                <ul>
                    <Link to={'/home'}> <li>Home</li></Link>

                    <Link to={'shop'}><li>Shop</li></Link>
                    <Link to={'cart'}><li>Cart</li></Link>
                </ul>
            </div>

        </div>
    )
}
export default NavBar