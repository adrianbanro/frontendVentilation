import { Component, Input } from '@angular/core'

@Component({
    selector: 'data',
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
   export class WrapperDataFormatingComponent{
    @Input() temperature = 0;
    @Input() humidity = 55;

    onClick(ratingValue){
        this.temperature = ratingValue;
    }
   } 