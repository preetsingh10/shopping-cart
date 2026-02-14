import CartItem from "../src/components/CartItem"
import { useOutletContext } from "react-router-dom"
function Cart() {
    const [useCart] = useOutletContext()
    console.log(useCart)
    return (
        <>
            <h1>Cart Page</h1>
            <div>

                {useCart.map(item => {
                    return (
                        <>
                       <CartItem item={item}/>
                       <hr />
                        </>

                    )
                })}
            </div>
        </>

    )
}
export default Cart
