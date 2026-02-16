import { useState } from "react"
import { useOutletContext } from "react-router-dom"
import QuantityUpdater from "./quantityUpdater"
function Card({ item }) {

    const [useCart, setCart] = useOutletContext()
    const [useTimes, setTimes] = useState(1)
    function addToCart(itemToBeAdded) {
        const alreadyPresent = (item) => item.id === itemToBeAdded.id
        if (useCart.some(alreadyPresent)) {
            const updatedCart = useCart.map(cartItem => {
                if (cartItem.id === itemToBeAdded.id) {
                    return { ...cartItem, times: cartItem.times + useTimes }
                }
                return cartItem
            })
            setCart(updatedCart)
            setTimes(1)
        } else {
            itemToBeAdded.times += useTimes 
            setCart([...useCart, itemToBeAdded])
            setTimes(1)
        }
    }


    return (

        <div className="card">
            <img src="src/assets/placeholder.jpg" height={"100px"} width={"100px"} alt="" />
            <h2>{item.name}</h2>
            <p>{item.discription}</p>
            <QuantityUpdater useTimes={useTimes} setTimes= {setTimes} item={item} />
            <button onClick={() => addToCart(item)} className="AddToCartBttn">Add To Cart</button>
        </div>
    )
}
export default Card