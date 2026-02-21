import CartItem from "../src/components/CartItem"
import { useOutletContext } from "react-router-dom"
import styles from "./Cart.module.css"
function Cart() {
    const [useCart] = useOutletContext()
    function calculateTotal() {
        if (useCart.length === 0) { return }
        let total = 0
        useCart.forEach(item => {
            total += item.price * item.times
        });
        return total
    }
    return (
        <div className={styles.cartPage}>

            {useCart.length === 0 ? <h1>Your Cart is empty</h1> :
                <>
                    <h1>Your Cart</h1>
                    <div className={styles.cartProductContainer}>
                        {useCart.map(item => {
                            return (
                                <CartItem key={item.id} item={item} styles={styles} />
                            )
                        })}
                    </div>
                    <div>
                        <hr />
                        <h1>Your Total: ${calculateTotal()}</h1>
                    </div>
                </>
            }
        </div>

    )
}
export default Cart
