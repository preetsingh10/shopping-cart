import { useOutletContext } from "react-router-dom"
function CartItem({ item }) {
    const [useCart, setCart] = useOutletContext()
    function remove(itemToBeRemoved) {
        if (itemToBeRemoved.times === 1) {
            const newData = useCart.filter((cartItem) => cartItem.id !== itemToBeRemoved.id)
            setCart([...newData])
        } else {
            const updatedCart = useCart.map((item) => {
                if (item.id === itemToBeRemoved.id) {
                    return { ...item, times: item.times - 1 }
                }
                return item
            })
            setCart(updatedCart)
        }
    }
    return (
        <div>

            <span>{item.times} x <img src="src/assets/placeholder.jpg" height={"100px"} width={"100px"} alt="" /></span>
            <h2>{item.name}</h2>
            <h2>{item.id}</h2>
            <h2>{item.discription}</h2>
            <button onClick={() => remove(item)}>Remove</button>
        </div>
    )
}
export default CartItem