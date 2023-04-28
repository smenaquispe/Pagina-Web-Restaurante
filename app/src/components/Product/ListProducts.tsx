import Product from "./Product";
import ProductInterface from "./Product.interface";
import withList from "../withList";

interface Props {
    items: ProductInterface[]
}

function ListProducts_(props : Props) {
  return (
    <ul>
      {props.items.map(item => (
        <li key={item.id}>
          <Product {...item} />
        </li>
      ))}
    </ul>
  )
}

function ListProducts(props : ProductInterface) {
    return withList(ListProducts_, '/products', props)
}

export default ListProducts;