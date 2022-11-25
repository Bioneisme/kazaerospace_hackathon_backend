import {NextFunction, Request, Response} from "express";
import logger from "../config/logger";
import {DI} from "../index";
import {Products} from "../entities";

export async function getAllProducts(req: Request, res: Response, next: NextFunction) {
    try {
        const products = await DI.em.find(Products, {});
        const titles = new Set();
        products.forEach(product => {
            titles.add(product.title);
        });
        res.json(Array.from(titles));
        return next();
    } catch (e) {
        logger.error(`getAllProducts: ${e}`);
        return next();
    }
}