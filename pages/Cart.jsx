import CartItem from "../src/components/CartItem"
import { useOutletContext } from "react-router-dom"
function Cart() {
    const [useCart] = useOutletContext()
    return (
        <>
            <h1>Cart Page</h1>
            <div>

                {useCart.map(item => {
                    return (
                        <CartItem key={item.id} item={item} />
                    )
                })}
            </div>
        </>

    )
}
export default Cart
