import CartUpdater from "./CartUpdater"
import { useOutletContext } from "react-router-dom"

function CartItem({ item }) {
    const [useCart, setCart] = useOutletContext()
    if (item.times < 1) {
        const updatedCart = useCart.map((cartItem) => cartItem.id === item.id ? { ...cartItem, times: 1 } : cartItem)
        setCart(updatedCart)
    }

    function remove(itemToBeRemoved) {
        const updatedCart = useCart.filter((item) => item.id !== itemToBeRemoved.id)
        setCart(updatedCart)
    }
    function addTimes() {
        const updatedCard = useCart.map((cartItem) => cartItem.id === item.id ? { ...cartItem, times: cartItem.times += 1 } : cartItem)
        setCart(updatedCard)
    }
    function subtractTimes() {
        const updatedCard = useCart.map((cartItem) => cartItem.id === item.id ? { ...cartItem, times: cartItem.times -= 1 } : cartItem)
        setCart(updatedCard)
    }
    function changeTimesByInput(value) {

        const updatedCard = useCart.map((cartItem) => cartItem.id === item.id ? { ...cartItem, times: Number(value) } : cartItem)
        setCart(updatedCard)
    }
    return (
        <div>

            <span>{item.times} x <img src="src/assets/placeholder.jpg" height={"100px"} width={"100px"} alt="" /></span>
            <h2>{item.name}</h2>
            <h2>{item.id}</h2>
            <h2>{item.discription}</h2>
            <CartUpdater incrementor={addTimes} decrementor={subtractTimes} changeTimesByInput={changeTimesByInput} quantity={item.times} />
            <button onClick={() => remove(item)}>Remove</button>
        </div>
    )
}
export default CartItem