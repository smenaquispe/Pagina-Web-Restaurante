import Product from "./Product/Product"
import { useContext, useEffect, useState } from "react"
import { Context } from "../providers/Context"
import ProductInterface from "./Product/Product.interface";

function ListProducts() {

    const [products, setproducts] = useState< Array <ProductInterface> >();
    const { BACKEND_URL } = useContext(Context)

    useEffect(() => {
        fetch(BACKEND_URL + '/products', {
            method: 'POST'
        })
        .then(res => res.json())
        .then(json => setproducts(json))
    }, [])

    return (
        <ul>
            {
                products &&
                products.map(p => {
                    return (
                        <li key={p.id}>
                            <Product data={p} />
                        </li>
                    )
                })
            }            
        </ul>
    )
}

export default ListProducts