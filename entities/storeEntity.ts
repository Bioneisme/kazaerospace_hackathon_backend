import {Entity, Property} from "@mikro-orm/core";
import {baseEntity} from "./baseEntity";

@Entity()
export class Stores extends baseEntity {
    @Property({type: "string"})
    title!: string;

    @Property({type: "string"})
    description!: string;

    @Property({type: "numeric"})
    lat!: number;

    @Property({type: "numeric"})
    lng!: number;


    constructor(title: string, lat: number, lng: number, description: string) {
        super();

        this.title = title;
        this.description = description;
        this.lat = lat;
        this.lng = lng;
    }
}