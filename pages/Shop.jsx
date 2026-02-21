import { useEffect, useState } from "react"
import Card from "../src/components/Card"
import styles from "./Shop.module.css"
import Loading from "../src/components/Loading"
function Shop() {
    const [useProducts, setProducts] = useState([
        { name: 'a', discription: "apple", id: 1, src: "https://picsum.photos/300/200", times: 0 },
        { name: 'b', discription: "banana", id: 2, src: "https://picsum.photos/300/200", times: 0 },
        { name: 'c', discription: "cat", id: 3, src: "https://picsum.photos/300/200", times: 0 }
    ])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("https://fakestoreapi.com/products")
                if (!response.ok) {
                    throw new Error("Response is not okay from the server")
                }
                const data = await response.json()
                console.log(data)
                setProducts(data)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }

        }

        fetchData()
    }, [])

    return (
        <>
            <h1>Shop Page</h1>
            {loading && <Loading />}
            {loading == false &&
                <div className={styles.cardContainer}>
                    {
                        useProducts.map(item => {
                            return (
                                <Card key={item.id} item={item} />
                            )
                        })
                    }
                </div>}
        </>
    )
}
export default Shop