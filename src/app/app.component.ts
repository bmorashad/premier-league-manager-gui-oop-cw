import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Premier League';
  links = [
	  {path: "professional", title: "PROFESSIONAL"},
	  {path: "u18", title: "U18"},
	  {path: "u23", title: "U23"},
  ]
}
