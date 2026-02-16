function CartUpdater({incrementor, decrementor,changeTimesByInput, quantity}){
    return (
        <div>
            <button onClick={()=>incrementor()}>+</button>
            <input onChange={(e)=>changeTimesByInput(e.target.value)} type="number" name="number" id="number" value={quantity} />
            <button onClick={()=>decrementor()}>-</button>
        </div>
    )
}
export default CartUpdater