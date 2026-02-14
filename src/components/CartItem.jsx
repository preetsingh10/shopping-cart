function CartItem({item}) {
    return (
        <div>
            <img src="src/assets/placeholder.jpg" height={"100px"} width={"100px"} alt="" />
            <h2>{item.name}</h2>
            <h2>{item.id}</h2>
            <h2>{item.discription}</h2>
        </div>
    )
}
export default CartItem