export class Continent {
  continentId:number
  continentName:string
  continentImage:string
  continentDescription:string

  public constructor(init?:Partial<Continent>){
    Object.assign(this, init);
  }
}

export interface IContinent {
  continentId:number
  continentName:string
  continentImage:string
  continentDescription:string
}
