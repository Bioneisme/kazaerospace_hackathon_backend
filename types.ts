import {Request} from "express";
import {Users} from "./entities";

export type UserRequest = Request & {user: Users | undefined, locals: Date};

export type productObject = {
    link: string,
    category: string,
    title: string,
    store: string,
    price: number,
    image: string
}

export enum storeURLs {
    'techno_dom'="https://www.technodom.kz/astana/catalog/"
}

export enum technoDomCategories {
    'laptops'= "noutbuki-i-komp-jutery/noutbuki-i-aksessuary/noutbuki",
    'phones'="smartfony-i-gadzhety/smartfony-i-telefony/smartfony",
    'gadgets'="smartfony-i-gadzhety/gadzhety",
    'tablets'="smartfony-i-gadzhety/planshety-i-jelektronnye-knigi/planshety",
    'televisions'="tv-audio-foto-video/televizory",
    'computers'="noutbuki-i-komp-jutery/komp-jutery-i-monitory/stacionarnye-pk",
    'audio'="tv-audio-foto-video/audio-tehnika/akustika",
    'cameras'="fototehnika-i-kvadrokoptery/jekshn-kamery-i-aksessuary",
    'digital'="tv-audio-foto-video/cifrovoe-sputnikovoe-tv"
}