import { Component } from '@angular/core';
import { RoomService } from './components/room.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RoomService]
})
export class AppComponent {
  title = 'Angular8Client';
}
