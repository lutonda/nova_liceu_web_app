import {ContactType} from './contactType'
export class Contact {
 public id: string;
  public description: string;
  public contactType: ContactType = new ContactType;
  public contactTypeid: string;
  constructor() {}
}
