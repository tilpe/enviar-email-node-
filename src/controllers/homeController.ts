import { Request, Response } from 'express';
import { Product } from '../models/Product';
import { sequelize } from '../instances/mysql';
import { Pessoas } from '../models/User';

export const home = async (req: Request, res: Response) => {

    let pessoa = await Pessoas.findAll();
    let data = { pessoas: pessoa }

    res.render('pages/home', data);
};