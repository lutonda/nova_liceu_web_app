import { Township } from './township';
import { Sex } from './sex';
import { IdCard } from './idCard';
import { Contact } from './contact';
import { Address } from './address';
import { Health } from './health';
export class Person {
  public id: string;
  public firstName: string;
  public middleName: string;
  public lastName: string;
  public sex: Sex = new Sex;
  public sexid: string;
  public idCard: IdCard = new IdCard;
  public idCardid: string;
  public contacts: Array<Contact> = new Array();
  public address: Address = new Address;
  public addressid: string;
  //public health: Health = new Health;
  public birthDate: Date;
  public birthPlace: Township = new Township;
  public birthPlaceid: string;

  constructor() {}
}
