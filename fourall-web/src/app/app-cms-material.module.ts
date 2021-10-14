import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from "@angular/material/icon"
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,MatFormFieldModule,MatMenuModule, MatTabsModule,
    MatCardModule,
  MatInputModule
  ],

  exports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,MatFormFieldModule,MatMenuModule, MatTabsModule,
    MatCardModule, MatInputModule
  ]
})
export class AppCMSMaterialModule{}
