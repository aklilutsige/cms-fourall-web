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
  continetImage:any;
  newContinent:IContinent;

  constructor(private continentService:ContinentService) { }
  ngOnInit(): void { }

  /**
   *
   * @param event
   */
  onFileChanged(event:any){
    this.selectedFile = event.target.files[0];
  }

  /**
   *
   */
  onInsertContinet(){
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile',this.selectedFile, this.selectedFile.name)

    this.newContinent = new Continent(<Continent>{
      continentId:this.continentId,
      continentName:this.continetName,
      continentDescription:this.continetDescription,
      continentImage:uploadImageData
    });
    console.table(this.newContinent);
    this.continentService.addNewContinent(this.newContinent);
  }

}
