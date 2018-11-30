import { Person } from './person';
export class Student {
  public id: string;
  public code: string;
  public person: Person = new Person;

  constructor() {}
}
