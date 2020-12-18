import { NgModule } from '@angular/core';


import { SideMenuComponent } from './components/sideMenu.component';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatExpansionModule} from '@angular/material/sidenav';
import { CredentialsComponent } from './credentials/credentials.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@NgModule({
  imports: [MatExpansionModule,MatExpansionModule, MatInputModule, MatButtonModule, MatSelectModule, MatRadioModule, MatCardModule, ReactiveFormsModule,FormGroup, FormBuilder, Validators],
  declarations: [SideMenuComponent, CredentialsComponent],
  exports: [SideMenuComponent,ReactiveFormsModule, CredentialsComponent],
  bootstrap: [SideMenuComponent]
})
export class SideMenuModule {}
