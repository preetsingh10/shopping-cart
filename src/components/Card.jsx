function Card({item}){
    return (
    
        <div className="card">
            <img src="" alt="" />
            <h2>{item.name}</h2>
           <p>{item.discription}</p> 
           <button className="AddToCartBttn">Add To Cart</button>
        </div>
    )
}
export default Card