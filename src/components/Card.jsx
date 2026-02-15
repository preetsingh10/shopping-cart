
import { useOutletContext } from "react-router-dom"
function Card({ item }) {

    const [useCart, setCart] = useOutletContext()
    function addToCart(itemToBeAdded) {
        const alreadyPresent = (item)=> item.id === itemToBeAdded.id
        if (useCart.some(alreadyPresent)) {
            useCart.map(cartItem => {
                if (cartItem.id === itemToBeAdded.id) {
                    cartItem.times += 1
                    setCart([...useCart])
                    return
                }
            })
        } else {
            setCart([...useCart, itemToBeAdded])
        }
    }


    return (

        <div className="card">
            <img src="src/assets/placeholder.jpg" height={"100px"} width={"100px"} alt="" />
            <h2>{item.name}</h2>
            <p>{item.discription}</p>
            <button onClick={() => addToCart(item)} className="AddToCartBttn">Add To Cart</button>
        </div>
    )
}
export default Card