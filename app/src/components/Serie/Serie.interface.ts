import CommonInterface from "../Common.interface"

export default interface SerieInterface extends CommonInterface {
    name: string, 
    price: number,
    market: string,
    tags: Array<string>
}