import CartUpdater from "./CartUpdater"
import { useOutletContext } from "react-router-dom"

function CartItem({ item, styles }) {
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
        <div className={styles.productCard}>
            <div className={styles.flexContainer} >
                <div className={styles.timesContainer}>
                    <span>{item.times} X </span>
                </div>
                <div>
                    <img src={item.images[0]} height={"100px"} width={"100px"} alt="" />
                </div>
            </div>
            <div>
                <h2>{item.title}</h2>
                <span>{item.description}</span>
                <br />
                <span>${item.price}</span>
                <CartUpdater incrementor={addTimes} decrementor={subtractTimes} changeTimesByInput={changeTimesByInput} quantity={item.times} styles={styles} />
                <button onClick={() => remove(item)}>Remove</button>
            </div>
        </div>
    )
}
export default CartItem