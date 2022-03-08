import { Gender } from "./Gender";
import { Sterilization } from "./Sterilization";

export type Dog = {
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