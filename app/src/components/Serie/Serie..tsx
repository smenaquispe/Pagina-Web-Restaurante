import SerieInterface from "./Serie.interface"

function Serie(props : SerieInterface) {
    return (
        <div>
            Serie nombre: {props.name} <br />
            id: {props.id}
        </div>
    )
}

export default Serie