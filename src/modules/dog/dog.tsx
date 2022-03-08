import { Client } from "../client/client";

export type Dog {
    id: string;
    noun: string;
    female: boolean;
    birthdate: Date;
    sterilized: boolean;
    chemical: boolean;
    color: string;
    dead: boolean;
    master: any;
    breed: string;
    //client: Client;
    //breed: Breed;
    //crossbreed: Breed;
}