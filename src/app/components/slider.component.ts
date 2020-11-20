import {Component, Input} from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import { Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'slider',
    template: `

    Room: 
<h2> {{room}} </h2>  <br>

      Temperature: <br>
    <mat-slider [(ngModel)]="temperature"  (input)="onTemperatureChange($event)" min="15" max="25" step="0.5" >  </mat-slider>
    <div>{{temperature}} degr.Celsius </div>

    <br>
    <br>
    <br>

      Humidity: <br>
    <mat-slider [(ngModel)]="humidity"  (input)="onHumidityChange($event)" min="0" max="100" step="0.5" >  </mat-slider>
    <div>{{humidity}}%</div>
   
    `,
    styles: [`
    .media {
    margin-bottom: 20px;
    }
    `]
   })

   export class Slider {
    @Input() room;
    @Input() temperature=20;
    @Input() humidity=50;

    //@Output() newItemEvent = new EventEmitter<string>();
    @Output() modifiedRoomData_Event = new EventEmitter<object>();
    //@Output() updatedRoomData_Event = new EventEmitter<string>();

    onTemperatureChange(event: any) {
      console.log("This is emitted as the temperature thumb slides");
      console.log("temperature for ",this.room, " : ",event.value);
      //updatedRoomData;
    /*  modifyRoomData(event.value: any) {
        this.newItemEvent.emit(event.value);
      }*/
      var modifiedRoomData = {
        room: this.room,
        temperature: event.value,
        humidity: this.humidity
        
      };

      this.modifiedRoomData_Event.emit(modifiedRoomData);
    }

    onHumidityChange(event: any) {
      console.log("This is emitted as the humidity thumb slides");
      console.log("humidity for ",this.room, " : ",event.value);

      var modifiedRoomData = {
        room: this.room,
        temperature: this.temperature,
        humidity: event.value
      };

      this.modifiedRoomData_Event.emit(modifiedRoomData);
    }




    formatLabel(value: number) {
      if (value >= 1000) {
        return Math.round(value / 1000) + 'k';
      }
  /*
    <mat-slider
  thumbLabel
  [displayWith]="formatLabel"
  tickInterval="1000"

step = "5" value "50"

  min="1"
  max="100000"></mat-slider>
  */


      return value;
    }
  }
  
  