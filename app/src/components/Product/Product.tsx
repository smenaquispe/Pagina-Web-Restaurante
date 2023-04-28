import ProductInterface from "./Product.interface"

function Product(props : ProductInterface ) {
    return (
        <div>
            Producto id: {props.id} serie: {props.idSerie}
        </div>
    )
}
export default Product