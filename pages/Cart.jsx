import { useOutletContext } from "react-router-dom"
function Cart(){
    const [useCart] = useOutletContext()
    console.log(useCart)
    return (
        <>
        <h1>Cart Page</h1>
        <div>

        {useCart.map(item=>{
            return(<h2>{item}</h2>)
        })}
        </div>
        </>

    )
}
export default Cart
