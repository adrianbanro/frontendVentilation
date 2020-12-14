import { NgModule } from '@angular/core';


import { SideMenuComponent } from './components/sideMenu.component';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatExpansionModule} from '@angular/material/sidenav';

@NgModule({
  imports: [MatExpansionModule,MatExpansionModule],
  declarations: [SideMenuComponent],
  exports: [SideMenuComponent]
})
export class SideMenuModule {}
