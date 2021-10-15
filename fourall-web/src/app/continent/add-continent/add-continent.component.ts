import { IContinent,Continent } from '../../models/continent';
import { ContinentService } from './../../services/continent.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-continent',
  templateUrl: './add-continent.component.html',
  styleUrls: ['./add-continent.component.scss']
})
export class AddContinentComponent implements OnInit {

  selectedFile:File;
  continentId:number = 0;
  continetName:string ="";
  continetDescription:string="";
  continetImage:string ="";
  newContinent:IContinent;
  insertConfirmation:boolean =false;
  errorMessage:boolean = false;
  addNewContinent:boolean =true;

  constructor(private continentService:ContinentService) { }
  ngOnInit(): void { }

  /**
   *
   * @param event
   */
  onFileChanged(event:any){
    this.selectedFile = event.target.files[0];
  }
  resetAddNewContinetForm(){
     this.continentId=0;
      this.continetName="";
      this.continetDescription="";
      this.continetImage="";      
      this.insertConfirmation = false;
    this.addNewContinent = true;
  }

  /**
   *
   */
  onAddNewContinet(){
    this.newContinent = new Continent(<Continent>{
      continentId:this.continentId,
      continentName:this.continetName,
      continentDescription:this.continetDescription,
      continentImage:this.selectedFile.name
    });
    /**
    *
    added continent using continent service [POST] */
    this.continentService.addNewContinent(this.newContinent);    
    this.insertConfirmation = true;
    this.addNewContinent = false;
    
  }

}
