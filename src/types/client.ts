import { Gender } from './dog';

export class Client {
  constructor(public firstName: string, public lastName: string, public gender: Gender, public email: String, public phone: string) {}
}