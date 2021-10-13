export class Continent {
  continentId:number
  continentName:string
  continentImage:any
  continentDescription:string

  public constructor(init?:Partial<Continent>){
    Object.assign(this, init);
  }
}

export interface Continent {
  continentId:number
  continentName:string
  continentImage:any
  continentDescription:string
}
