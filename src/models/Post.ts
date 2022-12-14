import { Model, DataTypes } from "sequelize";
import { sequelize } from '../instances/mysql';


export interface PostInstance extends Model {
    id: number,
    titulo: number,
    texto: string
}

export const Posts = sequelize.define<PostInstance>("post", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    titulo: {
        type: DataTypes.STRING
    },
    texto: {
        type: DataTypes.STRING
    },
}, {
    tableName: 'posts',
    timestamps: false
})