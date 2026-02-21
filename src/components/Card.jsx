import { useState } from "react"
import { useOutletContext } from "react-router-dom"
import QuantityUpdater from "./quantityUpdater"
import styles from "./Card.module.css"
function Card({ item }) {
    

    const [useCart, setCart] = useOutletContext()
    const [useTimes, setTimes] = useState(1)
    function addToCart(itemToBeAdded) {
        if(useTimes < 1){
            setTimes(1)
            return
        }
        const alreadyPresent = (item) => item.id === itemToBeAdded.id
        if (useCart.some(alreadyPresent)) {
            const updatedCart = useCart.map(cartItem => {
                if (cartItem.id === itemToBeAdded.id) {
                    return { ...cartItem, times: cartItem.times + Number(useTimes )}
                }
                return cartItem
            })
            setCart(updatedCart)
            setTimes(1)
        } else {
            const product = {...itemToBeAdded, times: 0}
            product.times += Number(useTimes )
            setCart([...useCart, product])
            setTimes(1)
        }
    }


    return (

        <div className={styles.card}>
            <img src={item.image} height={"200px"} width={"200px"} alt="" />
            <div className={styles.cardPropertiesContainer}>
            <h2>{item.title}</h2>
            <span>${item.price}</span>
            <QuantityUpdater useTimes={useTimes} setTimes= {setTimes} item={item} styles={styles} />
            <button onClick={() => addToCart(item)} className="AddToCartBttn">Add To Cart</button>
            </div>
        </div>
    )
}
export default Card