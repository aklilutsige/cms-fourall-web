 export class Continent {
  continentId:number;
  continentName:string;
  continentImage:string;
  continentDescription:string;
  
/*
  constructor(continentId:number,
    continentName:string,
    continentImage:string,
    continentDescription:string){
      this.continentId = continentId;
      this.continentName = continentName;
      this.continentImage = continentImage;
      this.continentDescription = continentDescription;
    }*/


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
