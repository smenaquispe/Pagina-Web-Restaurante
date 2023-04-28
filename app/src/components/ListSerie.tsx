import Serie from './Serie/Serie.'
import SerieInterface from './Serie/Serie.interface'
import withList from './withList'

interface Props {
    items: SerieInterface[]
}

function ListSerie_(props : Props) {
    return (
        <ul>
          {props.items.map(item => (
            <li key={item.id}>
              <Serie {...item} />
            </li>
          ))}
        </ul>
      )
       
}

function ListSerie() {
    return withList(ListSerie_,'/serie')
}

export default ListSerie