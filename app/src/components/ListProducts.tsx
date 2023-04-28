import Product from "./Product/Product";
import ProductInterface from "./Product/Product.interface";
import withList from "./withList";

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

function ListProducts() {
    return withList(ListProducts_, '/products')
}

export default ListProducts;