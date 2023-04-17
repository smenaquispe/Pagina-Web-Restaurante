import ProductInterface from "./Product.interface"

function Product({ data } : { data : ProductInterface }) {
    return (
        <div>
            Producto id: {data.id} serie: {data.idSerie}
        </div>
    )
}
export default Product