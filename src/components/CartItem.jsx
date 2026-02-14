import { useOutletContext } from "react-router-dom"
function CartItem({ item }) {
    const [useCart, setCart] = useOutletContext()
    function remove(itemToBeRemoved) {
        const newData = useCart.filter((cartItem) => cartItem !== itemToBeRemoved)
        setCart([...newData])
    }
    return (
        <div>
            <img src="src/assets/placeholder.jpg" height={"100px"} width={"100px"} alt="" />
            <h2>{item.name}</h2>
            <h2>{item.id}</h2>
            <h2>{item.discription}</h2>
            <button onClick={() => remove(item)}>Remove</button>
        </div>
    )
}
export default CartItem