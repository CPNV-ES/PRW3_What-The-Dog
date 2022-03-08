import { Gender } from "./Gender";
import { Sterilization } from "./Sterilization";

export type Dog = {
    id: string;
    name: string;
    gender: Gender;
    birthdate: Date;
    sterilization: Sterilization;
    color: string;
    isDead: boolean;
    master: any; // Client
    breedName: string;
    //breed: Breed;
    //crossbreed: Breed;
}