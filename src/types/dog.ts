import { Client } from './client';

export enum Gender {
  Male,
  Female
}

export class Dog {
  constructor(public name: string, public gender: Gender, public birthday: Date, public breed: string, public master: Client) {}
}
