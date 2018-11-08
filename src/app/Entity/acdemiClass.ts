import { Grade } from './grade';
import { Period } from './period';
import { Room } from './room';

export class AcademiClass {
  public id: string ;
  public name: string ;
  public number: string ;
  public grade: Grade = new Grade;
  public period: Period = new Period;
  public room: Room = new Room;
  public year: string;

  constructor() {}
}
