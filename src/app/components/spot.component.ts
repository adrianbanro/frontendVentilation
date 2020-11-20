import {Component, Input} from '@angular/core';
//import { NotUsedComponent } from './notused.component';
//import { WrapperDataFormatingComponent } from './wrapperDataFormating.component';
//import { Slider} from './slider.component';
import { Output, EventEmitter } from '@angular/core';

import { RoomService } from './room.service';

import { HttpClient } from '@angular/common/http';
//import { APIService } from '././api.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
 selector: 'spot',
 template: `




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

 <!--
 <div class="row">

   <div class="col">

   </div>
   <div class="col" style="border-radius: 5px; background: #ccff99">

   <div *ngIf="show==1">

   <slider   (modifiedRoomData_Event)="modifyRoom($event)"
   [room]="displayedSpot.roomName"
   [temperature]="displayedSpot.temperature"
   [humidity]="displayedSpot.humidity">
    </slider>

    </div>

   </div>
   <div class="col">
   <div *ngIf="show==1">
   <mat-slide-toggle [(ngModel)]="toggled" (change)="onChange($event)" style="height:30%; position:absolute; bottom:10px;">Saved</mat-slide-toggle>
   <div>{{toggled}}</div>
   </div>
 </div>

 </div>
-->

 <!--
</div>
-->

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
export class SpotComponent {
/*
 @Input() data;
 @Input() show;

 @Output() updatedRoomData_Event = new EventEmitter<object>();



 isValid = false;
 toggled;
 showProduct=1;
*/

 rooms;
 displayedSpot;


 constructor(private route: ActivatedRoute,private router: Router, roomService:RoomService,){
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
/*
   for ( spot of this.rooms) {
    if (spot.id==route_id)
    { this.displayedSpot=spot;
        console.log("displayedSpot: ",this.displayedSpot)
    }
   }
   */

    //console.log("555 DATA",this.data);
  //console.log("555 show",this.show);


  //console.log("555 show",this.visibility);
  //console.log("555 visibilityw",visibility);
  //<img class="media-object" src="src/app/Room_Images/IMG_20201026_120629.jpg">
  // {{ data.releasedDate }}
}

ngOnInit() {
   // this.message = '';
   // this.getTutorial(this.route.snapshot.paramMap.get('id'));
  }








}
