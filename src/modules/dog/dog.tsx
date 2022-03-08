import { Gender } from "./gender";
import { Sterilization } from "./sterilization";

export type Dog {
    Id: string;
    Name: string;
    Gender: Gender;
    Birthdate: Date;
    Sterilization: Sterilization;
    Color: string;
    IsDead: boolean;
    Master: any; // Client
    BreedName: string;
    //Breed: Breed;
    //Crossbreed: Breed;
}