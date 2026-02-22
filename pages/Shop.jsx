import { useEffect, useState } from "react"
import Card from "../src/components/Card"
import styles from "./Shop.module.css"
import Loading from "../src/components/Loading"
function Shop() {
    const [products, setProducts] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("https://dummyjson.com/products")
                if (!response.ok) {
                    throw new Error("Response is not okay from the server")
                }
                const data = await response.json()
                console.log(data.products)
                const updatedData = await data.products.map(item=> {return {...item, price:Math.ceil(item.price)}})
                console.log(updatedData)
                setProducts(updatedData)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }

        }

        fetchData()
   
    }, [])

    return (
        <>
            <h1>Our Store</h1>
            {loading && <Loading />}
            {loading == false &&
                <div className={styles.cardContainer}>
                    {
                        products.map(item => {
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