import { Request, Response } from "express";
import { Posts } from "../models/Post";

export const post = async (req: Request, res: Response) => {
    let posts = await Posts.findAll();
    let data = {
        posts: posts
    }

    res.render('pages/post', data);
}