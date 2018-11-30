import { Province } from 'app/Entity/province';

export class Township {
  public id: string;
  public name: string;
  public code: string;
  public province: Province = new Province;
  public provinceid: string;

  constructor() {}
}
