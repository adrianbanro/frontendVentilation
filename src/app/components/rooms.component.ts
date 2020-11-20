import {Component} from '@angular/core'
//import { RoomService } from '././room.service';
import { RoomService } from './room.service';

//import { RoomComponent } from './room.component';
import { HttpClient } from '@angular/common/http';
import { APIService } from '././api.service';

import { ActivatedRoute, Router } from '@angular/router';

//import { ActivatedRoute, Router } from '@angular/router';

// <a style="color:black" href="/rooms/{{ room.id }}">
//<a style="color:black" [routerLink]="['rooms',room.id]">

@Component({
    selector: 'rooms',
    template: `


<!--
    <mat-grid-list cols="2" rowHeight="1:1"  gutterSize="10px">
    <mat-grid-tile *ngFor="let room of rooms" >



      <mat-card style="height:100%" class="dashboard-card" >

      <a style="color:black" <a style="color:black" href="/rooms/{{ room.id }}">>

        <mat-card-header>
          <mat-card-title>
            {{room.roomName}}
            <button mat-icon-button class="more-button" [matMenuTriggerFor]="menu" aria-label="Toggle menu">
              <mat-icon>more_vert</mat-icon>
            </button>
            <mat-menu #menu="matMenu" xPosition="before">
              <button mat-menu-item >Modify Climat</button>
              <button mat-menu-item>Freeze Climat</button>
            </mat-menu>
          </mat-card-title>
        </mat-card-header>

        <mat-card-content style="width:100%" class="dashboard-card-content">
          <div></div>
            {{room.temperature}}
            {{room.humidity}}
          <a class="badge badge-warning" href="/rooms/{{room.id}}">
          Edit
        </a>
        </mat-card-content>
      </a>
      </mat-card>




    </mat-grid-tile>
    </mat-grid-list>
-->
<div style="background-color:lavenderblush;">


    <div class="btn-toolbar">
    <div *ngFor="let room of rooms">

    <button class="btn btn-primary mat-raised-button" (click)="onClickMe($event,room.roomName)">
    {{room.roomName}}
    </button>
    </div>
    </div>
    </div>
    <div class="row">
    <div class="col-md-6 col-lg-6 col-sm-6 text-center" style="background-color:lavenderblush;">
    <h2>Active Room Panel</h2>

    <div *ngFor="let room of rooms">
    <div *ngIf="room.roomName==this.activeRoom">
    <room (updatedRoomData_Event)="updateRoom($event)" [show]="detailVisibility" [data]="room"></room>
    </div>
    </div>
    </div>

<div class="col-md-6 col-sm-6 text-center"  style="background-color:lavenderblush;">
<mat-grid-list cols="2" rowHeight="1:1"  gutterSize="10px">
<mat-grid-tile *ngFor="let room of rooms" >
<a style="color:black" href="/rooms/{{ room.id }}">
  <mat-card style="height:100%" class="dashboard-card" (click)="onClickMe($event,room.roomName)">
    <mat-card-header>
      <mat-card-title>
        {{room.roomName}}
        <button mat-icon-button class="more-button" [matMenuTriggerFor]="menu" aria-label="Toggle menu">
          <mat-icon>more_vert</mat-icon>
        </button>
        <mat-menu #menu="matMenu" xPosition="before">
          <button mat-menu-item (click)="onClickMe($event,room.roomName)">Modify Climat</button>
          <button mat-menu-item>Freezze Climat</button>
        </mat-menu>
      </mat-card-title>
    </mat-card-header>

    <mat-card-content style="width:100%" class="dashboard-card-content">
      <div></div>
      <room [show]="dashboardVisibility" [data]="room"></room>
    </mat-card-content>
  </mat-card>
  </a>
</mat-grid-tile>
</mat-grid-list>
</div>


<!--


    </div>
    <mat-grid-list cols="3" rowHeight="550px">
    <mat-grid-tile *ngFor="let room of rooms" >
      <mat-card class="dashboard-card">
        <mat-card-header>
          <mat-card-title>
            {{room.roomName}}
            <button mat-icon-button class="more-button" [matMenuTriggerFor]="menu" aria-label="Toggle menu">
              <mat-icon>more_vert</mat-icon>
            </button>
            <mat-menu #menu="matMenu" xPosition="before">
              <button mat-menu-item (click)="onClickMe($event,room.roomName)">Modify Climat</button>
              <button mat-menu-item>Freeze Climat</button>
            </mat-menu>
          </mat-card-title>
        </mat-card-header>
        <mat-card-content class="dashboard-card-content">
          <div>Room data</div>
          <room [show]="dashboardVisibility" [data]="room"></room>
        </mat-card-content>
      </mat-card>
    </mat-grid-tile>
  </mat-grid-list>

    <h2>Active Room Panel</h2>

    <div *ngFor="let room of rooms">
    <div *ngIf="room.roomName==this.activeRoom">
    <room (updatedRoomData_Event)="updateRoom($event)" [show]="detailVisibility" [data]="room"></room>
    </div>
    </div>
-->
    `,
providers: [RoomService]
})



export class RoomsComponent {
  detailVisibility;
  dashboardVisibility;
   activeRoom;
   rooms;

  constructor(private route: ActivatedRoute,private router: Router, roomService:RoomService,private apiService: APIService){
   // ,private route: ActivatedRoute,private router: Router


   /*
       this.rooms=apiService.getAll()
       .subscribe(
         data => {
           this.rooms = data;
           console.log(data);
         },
         error => {
           console.log(error);
         });
   */




//var id=this.route.snapshot.paramMap.get('id');

    //this.rooms=roomService.getRooms();      //UNCOMMENT OUT HERE
    //console.log("rooms",this.rooms);        //UNCOMMEMT OUT HERE
    this.detailVisibility=1;
        this.dashboardVisibility=0;
    //this.detailVisibility=1;
    //this.dashboardVisibility=0;
    this.retrieveRooms();           /////DISABLE HERE TO HAVE THE OLD VERSION
 }

 retrieveRooms() {
   this.apiService.getAll()
     .subscribe(
       data => {
         this.rooms = data;
         console.log("rooms via api: ",data);
         console.log("this.rooms: ",this.rooms);
       },
       error => {
         console.log("error _rooms via api: ",error);
       });
 }

 updateRoom(updatedRoomData: any) {

         var constructor2 = (roomService:RoomService)=>{
             this.rooms=roomService.getRooms();
          }


         //this.items.push(newItem);
         updatedRoomData: Object;
         //this.products=productService.getProducts();

         console.log("updated Room Data : ",updatedRoomData);
         //this.updatedRoomData_Event.emit(modifiedRoomData);
         //console.log("updated Room Data : ",{updatedRoomData});
         console.log("updated Room Data : ",updatedRoomData.room);

         const updatedData={

             roomName: updatedRoomData.room,
             temperature: updatedRoomData.temperature,
             humidity: updatedRoomData.humidity
         }

         //const updatedRoom=
             var prod;
             var mergedRoom;
 /*

             const qwert888=this.products[0].productName;
             console.log("qwert888 : ",qwert888);
             let prod1=this.products[0];
             mergedRoom = {...prod1, ...updatedData};
             console.log("mergedRoom : ",mergedRoom);

             this.products.filter(function(){


                 console.log("444 prod : ",prod1.productName);
                 console.log("444 updatedRoomData.room : ",updatedRoomData.room);
                 return prod1.productName!=updatedRoomData.room;

              });
              console.log("trimmed products",this.products); // [ 1, 2, 3, 4, 5 ]
             let arr2 = [mergedRoom];
             this.products = [...this.products,...arr2];
             console.log("new products",this.products); // [ 1, 2, 3, 4, 5 ]
             if (prod1.productName==updatedRoomData.room)
             {
             mergedRoom = {...prod1, ...updatedData};
             console.log("mergedRoom : ",mergedRoom);
             }
             else console.log("not working mergedRoom : ");
 */

             for ( prod of this.rooms) {
                 console.log("products : ",this.rooms);
                 console.log("99999 prod : ",prod);

                 //console.log("prod222 : ",{prod}.);
                 //const smth;
                 //const {prod}= smth;
                 //console.log("smth : ",smth);

                 const qwert=prod.roomName;
                 console.log(" qwert : ", qwert);
                 var x =JSON.parse(JSON.stringify(prod));
                 console.log(" x : ", x.productName);
                 console.log("prod.productName : ",prod.imageUrl);

                 console.log("prod.productName : ",prod.roomName);
                 console.log("prod.rating : ",prod.temperature);
                 console.log("updatedRoomData.room : ",updatedRoomData.room);

                 // text += person[x];
                 if (prod.roomName==updatedRoomData.room)
                 {

                     mergedRoom = {...prod, ...updatedData};
                     console.log("mergedRoom : ",mergedRoom);

                     let index = this.rooms.indexOf(prod) // 1

                     //now use splice() method
                     let result = this.rooms.splice(index, 1); // ['mango']

                     //let trimmedproducts = this.products.splice(prod.productName);
                     //this.products = this.products.filter(item => item !== prod.productName)
                     //this.products = this.products.filter(prod.productName)
                     console.log("656565 trimmed products",this.rooms); // [ 1, 2, 3, 4, 5 ]
                     //console.log("99 656565 trimmed products",trimmedproducts); // [ 1, 2, 3, 4, 5 ]

                     let arr2 = [mergedRoom];
                     this.rooms = [...this.rooms,...arr2];
                     console.log("new products",this.rooms); // [ 1, 2, 3, 4, 5 ]
                     console.log("88 rebuilt products",this.rooms);

                 }
                 else console.log("not working mergedRoom : ");
                }


         /*this.products= {
             room: updatedRoomData.room,
             temperature: updatedRoomData.temperature,
             humidity: event.value
             imageUrl: "http://loremflickr.com/150/150?random=1",
             productName: "Product 1",
             releasedDate: "May 31, 2016",
             description: "Cras sit amet nibh libero, in gravida... ",
             rating: 4,
             numOfReviews: 2
           };*/
       }


 onClickMe($event,roomName){
  //console.log("Clicked77",$event)
  //alert(roomName)
  this.activeRoom=roomName;
  //this.products2=this.productService.getProducts();
  }
}
