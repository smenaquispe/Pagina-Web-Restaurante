/**
 * here ther ae attributes of order entity
 *
 */

export interface OrderAttributes {
    id?: number,
    price: number,
    products: Array<number>,
    when: Date
}