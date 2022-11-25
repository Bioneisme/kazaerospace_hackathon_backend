import {NextFunction, Request, Response} from "express";
import {productObject, storeURLs, sulpakCategories, technoDomCategories} from "../types";
import {Products} from "../entities";
import {technoDomParser} from "../helpers/parsers/technoDomParser";
import {sulpakParser} from "../helpers/parsers/sulpakParser";
import {DI} from "../index";
import logger from "../config/logger";


export async function parser(req: Request, res: Response, next: NextFunction) {
    try {
        const {store, category} = req.body;
        switch (store) {
            case 'techno_dom': {
                if (category in technoDomCategories) {
                    logger.info(`TechnoDom Parser: category=${category}`)
                    const baseURL = `${storeURLs.techno_dom}/${technoDomCategories[category as keyof typeof technoDomCategories]}`
                    const data = await technoDomParser(baseURL, baseURL, category);
                    const {oldProductsTotal, newProductsTotal, parsedTotal, productsTotal} = await addProductsToDB(data);
                    res.json({oldProductsTotal, newProductsTotal, parsedTotal, productsTotal});
                } else {
                    res.status(404).json({error: 'invalid_category'});
                }
                return next();
            }
            case 'sulpak': {
                if (category in sulpakCategories) {
                    logger.info(`Sulpak Parser: category=${category}`)
                    const URL = `${storeURLs.sulpak}/f/${sulpakCategories[category as keyof typeof sulpakCategories]}`
                    const data = await sulpakParser(URL, storeURLs.sulpak, category);
                    const {oldProductsTotal, newProductsTotal, parsedTotal, productsTotal} = await addProductsToDB(data);
                    res.json({oldProductsTotal, newProductsTotal, parsedTotal, productsTotal});
                } else {
                    res.status(404).json({error: 'invalid_category'});
                }
                return next();
            }
            default: {
                res.status(404).json({error: 'invalid_store'});
                return next();
            }
        }
    } catch (e) {
        logger.error(`parser: ${e}`);
        return next();
    }
}

export async function addProductsToDB(data: productObject[]):
    Promise<{ oldProductsTotal: number, newProductsTotal: number, parsedTotal: number, productsTotal: number}> {
    try {
        let oldProductsTotal = 0, newProductsTotal = 0, parsedTotal = 0;

        for (const product of data) {
            parsedTotal++;

            const existingProduct = await DI.em.findOne(Products, {link: product.link});
            if (existingProduct) {
                oldProductsTotal++;
            } else {
                newProductsTotal++;
                const newProduct = DI.em.create(Products, product);
                await DI.em.persistAndFlush(newProduct);
            }
        }

        const products = await DI.em.find(Products, {});
        return {oldProductsTotal, newProductsTotal, parsedTotal, productsTotal: products.length};
    } catch (e) {
        logger.error(`addProductsToDB: ${e}`);
        throw e;
    }
}