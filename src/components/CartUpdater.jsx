function CartUpdater({incrementor, decrementor,changeTimesByInput, quantity, styles}){
    return (
        <div className={styles.quantityUpdaterContainer} >
            <button className={styles.quantityUpdaterBtns} onClick={()=>incrementor()}>+</button>
            <input className={styles.quantityUpdater} onChange={(e)=>changeTimesByInput(e.target.value)} type="number" name="number" id="number" value={quantity} />
            <button className={styles.quantityUpdaterBtns} onClick={()=>decrementor()}>-</button>
        </div>
    )
}
export default CartUpdater