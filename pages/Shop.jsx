import { useState } from "react"
import Card from "../src/components/Card"
function Shop() {
    const [useProducts, setProducts] = useState([
        { name: 'a', discription: "apple", id:1 ,src:"https://picsum.photos/300/200", times:0},
        { name: 'b', discription: "banana", id:2 ,src:"https://picsum.photos/300/200", times: 0},
        { name: 'c', discription: "cat", id:3 ,src:"https://picsum.photos/300/200", times:0}
    ])
    return (
        <>
            <h1>Shop Page</h1>
            {
                useProducts.map(item => {
                    return (
                        <Card key={item.id} item={item} />
                    )
                })
            }
        </>
    )
}
export default Shop