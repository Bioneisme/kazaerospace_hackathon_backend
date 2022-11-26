import {NextFunction, Request, Response} from "express";
import {Products, Stores} from "../entities";
import logger from "../config/logger";
import {DI} from "../index";

export async function getAllProducts(req: Request, res: Response, next: NextFunction) {
    try {
        const products = await DI.em.find(Products, {});
        res.json(products);
        return next();
    } catch (e) {
        logger.error(`getAllProducts: ${e}`);
        return next();
    }
}

export async function getProductById(req: Request, res: Response, next: NextFunction) {
    try {
        const id: number = +req.params.id;
        const product = await DI.em.findOne(Products, {id});
        if (!product) {
            res.status(404).send("Incorrect product id");
            return next();
        }

        res.json(product);
        return next();
    } catch (e) {
        logger.error(`getAllProducts: ${e}`);
        return next();
    }
}

export async function getStoresByTitle(req: Request, res: Response, next: NextFunction) {
    try {
        const title = req.params.title;
        const stores = await DI.em.find(Stores, {title});
        if (stores.length < 1) {
            res.status(404).send("Incorrect store title");
            return next();
        }

        res.json(stores);
        return next();
    } catch (e) {
        logger.error(`getAllProducts: ${e}`);
        return next();
    }
}