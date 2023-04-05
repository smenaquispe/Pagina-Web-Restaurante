import { DataTypes, BuildOptions, Model, Sequelize } from "sequelize";
import { SerieAttributes } from "../domain/serie.interface";

export interface SerieModel extends Model<SerieAttributes> , SerieAttributes {}

export class Serie extends Model<SerieModel, SerieAttributes> {}

export type SerieStatic = typeof Serie & {
    new (values? : object, options ? : BuildOptions) : SerieModel
}

export function serieFactory(sequelize : Sequelize) : SerieStatic {
    return <SerieStatic>sequelize.define('serie', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        market: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tags: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        timestamps: false
    })
}