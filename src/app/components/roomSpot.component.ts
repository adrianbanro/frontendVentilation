import { Component, OnInit, Input } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';
import { ActivatedRoute, Router } from '@angular/router';

import { RoomService } from './room.service';
import { NotUsedComponent } from './notused.component';
import { WrapperDataFormatingComponent } from './wrapperDataFormating.component';
import { Slider} from './slider.component';

import { Output, EventEmitter } from '@angular/core';

import { NgModule } from '@angular/core';

import {MatSliderModule} from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { DashComponent } from 'src/app/dash/dash.component';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';

import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { MatSlideToggleModule } from '@angular/material/slide-toggle'

//import { APIService } from '././api.service';
import { APIService } from 'src/app/components/api.service';
/*
@NgModule({
  declarations: [

    WrapperDataFormatingComponent, Slider, NotUsedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule
  ],
  providers: []
  //,
  //bootstrap: [AppComponent]
})
*/

@Component({
  selector: 'app-tutorial-details',
   template: `
   <!--
   <div class="media">
   <div class="media-left">

   <br>
   </div>

   <div class="container">
   <div class="row" style="well well-sm">
     <div class="col"   >
     <img class="media-object" src="{{ displayedSpot.imageUrl }}" style="width: 150px; height: 150px">
     </div>
     <div class="col" style="border-radius: 5px; background: #73AD21">
     <h4 class="media-heading">
     {{ displayedSpot.roomName }}
     {{ displayedSpot.temperature }}
     {{ displayedSpot.humidity }}
     </h4>
     </div>

   </div>

   <div class="row">
   <div class="col">
   <h4 class="media-heading">

   </h4>

   <h4 class="media-heading">
   {{ displayedSpot.description }}
   </h4>
   </div>
   </div>
-->



<div >
<div class="media">
<div class="media-left">
<a href="#">
</a>
<br>
</div>

<div class="container">
<div class="row" style="well well-sm">
  <div class="col"   >
  <img class="media-object" src="{{ displayedSpot.imageUrl }}" style="width: 150px; height: 150px">
  </div>
  <div class="col" style="border-radius: 5px; background: #73AD21">
  <h4 class="media-heading">
  {{ displayedSpot.roomName }}
  </h4>
  <data
  [temperature]="displayedSpot.temperature"
  [humidity]="displayedSpot.humidity">
   </data>

  </div>

</div>

<div class="row">
<div class="col">
<h4 class="media-heading">

</h4>

<h4 class="media-heading">
{{ displayedSpot.description }}
</h4>
</div>
</div>


<div class="row">

  <div class="col">

  </div>
  <div class="col" style="border-radius: 5px; background: #ccff99">
  <div>








  <slider   (modifiedRoomData_Event)="modifyRoom($event)"
  [room]="displayedSpot.roomName"
  [temperature]="displayedSpot.temperature"
  [humidity]="displayedSpot.humidity">
   </slider>


   </div>
  </div>
  <div class="col">
  <div >
  <mat-slide-toggle [(ngModel)]="toggled" (change)="onChange($event)" style="height:30%; position:absolute; bottom:10px;">Saved</mat-slide-toggle>
  <div>{{toggled}}</div>


  </div>
</div>

</div>
</div>


<div class="media-body">
<div class="media-body">


</div>
</div>
</div>
</div>




   `,
   styles: [`
   .media {
   margin-bottom: 20px;
   }
   `]

})
export class RoomSpotComponent {
  @Input() data;
  @Input() show;
//  @Output() updatedRoomData_Event = new EventEmitter<object>();
  currentTutorial = null;
  message = '';
displayedSpot;
rooms;

isValid = false;
toggled;
togx;
showProduct=1;

modifiedSpotData;



    constructor(private route: ActivatedRoute,private router: Router, roomService:RoomService, private apiService: APIService){
      var spot;
       //this.rooms=roomService.getRooms();
      var route_id=this.route.snapshot.paramMap.get('id');
      //var route_id=this.route.snapshot.url.get('id');

      var pm =this.route.snapshot.paramMap;
      console.log("pm: ",pm);

      var route_id99=this.route.data
      //_routerState.snapShot.url;

      console.log("route_id99: ",route_id99);

      console.log("this.route: ",this.route);
      console.log("route_id: ",route_id);

this.rooms=roomService.getRooms();
console.log("r99ooms : ", this.rooms);

/*
     this.displayedSpot= {
      imageUrl: "http://loremflickr.com/150/150/professor?random=1",
      //imageUrl: "assets/Room_Images/IMG_20201026_120629.jpg",
      //imageUrl: "https://picsum.photos/200",

      id:1,
      roomName: "Room 1",
      releasedDate: "May 31, 2016",
      description: "Silent room overlooking the park,tables disposed projectworkwise... ",
      temperature: 23,
      humidity: 50
    };
   */
      for ( spot of this.rooms) {
       if (spot.id==route_id)
       { this.displayedSpot=spot;
           console.log("displayedSpot: ",this.displayedSpot)
       }
      }


this.getSpot(this.route.snapshot.paramMap.get('id'));



       //console.log("555 DATA",this.data);
     //console.log("555 show",this.show);


     //console.log("555 show",this.visibility);
     //console.log("555 visibilityw",visibility);
     //<img class="media-object" src="src/app/Room_Images/IMG_20201026_120629.jpg">
     // {{ data.releasedDate }}
   }

   getSpot(id) {
     this.apiService.get(id)
       .subscribe(
         data => {
           this.displayedSpot = data;
           console.log("somedata",data);
         },
         error => {
           console.log(error);
         });
   }

   modifyRoom(modifiedRoomData: object) {
      //this.items.push(newItem);
      console.log("modified Room Data: ",modifiedRoomData);
      this.modifiedSpotData=modifiedRoomData;
      //this.updatedRoomData_Event.emit(modifiedRoomData);
    }

    onChange($event: any) {
      console.log("Event: ",$event);
      console.log("toggled: ",this.toggled);
    //  this.showProduct=(this.toggled==true,1,0);
      //console.log("this.data33 : ", this.data)
      //console.log("this.modifiedRoomData33 : ", this.modifiedRoomData)


      /*
      this.apiService.create(this.data)
      .subscribe(
        response => {
          console.log(response);
          console.log("updatedData 6767444222 : ",this.data);
         // this.submitted = true;
        },
        error => {
          console.log(error);
          console.log("updatedData 6767444223 : ",this.data);
        });
    */

console.log("this.modifiedRoomData   _   in the update... : ",this.modifiedSpotData);

          this.apiService.update(this.route.snapshot.paramMap.get('id'), this.modifiedSpotData)
            .subscribe(
              response => {
               // this.currentTutorial.published = status;
                console.log(response);
                this.router.navigate(['/rooms']);
              },
              error => {
                console.log(error);
              });




    }

  ngOnInit() {
    this.message = '';
    var route_id=this.route.snapshot.paramMap.get('id');
console.log("route_id: ",route_id);
//alert(route_id);
    //this.getTutorial(this.route.snapshot.paramMap.get('id'));
  }


}
