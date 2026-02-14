
import { useOutletContext } from "react-router-dom"
function Card({ item }) {

    const [useCart, setCart] = useOutletContext()
    function addToCart(item) {
        setCart([...useCart, item])
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