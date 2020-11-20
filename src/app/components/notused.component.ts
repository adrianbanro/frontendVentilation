import { Component, Input } from '@angular/core'

@Component({
    selector: 'rating22',
    template: `

    <i
 class="glyphicon"
 [class.glyphicon-star-empty]="temperature < 1"
 [class.glyphicon-star]="temperature >= 1"
 (click)="onClick(1)"
 >
 </i>
 Temperature:
 {{ temperature }} degr.C
 <br>
 Humidity:
 {{ humidity }}%
    `
   })
   export class NotUsedComponent{
    @Input() temperature = 0;
    @Input() humidity = 55;

    onClick(ratingValue){
        this.temperature = ratingValue;
    }
   }




   /*
   export class RoomsComponent {

     rooms;
     constructor(private route: ActivatedRoute,private router: Router, roomService:RoomService){
      // ,private route: ActivatedRoute,private router: Router







   //var id=this.route.snapshot.paramMap.get('id');

       this.rooms=roomService.getRooms();      //UNCOMMENT OUT HERE
       console.log("rooms",this.rooms);        //UNCOMMEMT OUT HERE
       //this.detailVisibility=1;
       //this.dashboardVisibility=0;
       //this.retrieveRooms();           /////DISABLE HERE TO HAVE THE OLD VERSION
    }

   }
   */


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
