import { Student } from 'app/Entity/student';
import { Grade } from './grade';
import { Period } from './period';
import { Room } from './room';
import { Subject } from './subject';

export class AcademiClass {
  public id: string ;
  public name: string ;
  public number: string ;
  public grade: Grade = new Grade;
  public gradeId: string;
  public period: Period = new Period;
  public periodId: string;
  public room: Room = new Room;
  public roomId: string;
  public year: string;
  public students: Array<Student>
  public subjects: Array<Subject> = []

  constructor() {}
}
