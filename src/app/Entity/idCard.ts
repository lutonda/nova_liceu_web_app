import { IdCardType } from './idCardType';

export class IdCard {
  public id: string;
  public number: string;
  public idCardType: IdCardType = new IdCardType;
  public idCardTypeid: string

  constructor() {}
}
