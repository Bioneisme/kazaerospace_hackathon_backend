import {Entity, Property} from "@mikro-orm/core";
import {baseEntity} from "./baseEntity";

@Entity()
export class Products extends baseEntity {
    @Property({type: "string"})
    title!: string;

    @Property({type: "string"})
    category!: string;

    @Property({type: "numeric"})
    price!: number;

    @Property({type: "string"})
    store!: string;

    @Property({type: "string", nullable: true})
    img!: string;

    @Property({type: "string"})
    link!: string;


    constructor(title: string, category: string, price: number, store: string, img: string, link: string) {
        super();

        this.title = title;
        this.category = category;
        this.price = price;
        this.store = store;
        this.img = img;
        this.link = link;
    }
}