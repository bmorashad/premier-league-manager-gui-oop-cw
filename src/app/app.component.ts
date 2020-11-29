import { Component, OnInit } from '@angular/core';
import {PremierLeagueService} from './shared/services/premier-league.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
	season: string = ""
	title: string = 'Premier League';
	loadSeason() {
		this.premierLeagueService.getSeason()
		.subscribe(res => {
			if(res.status == 1) {
				this.season = res.data.season;
			}
		});
	}
	ngOnInit() : void {
		this.loadSeason();
	}
	constructor(private premierLeagueService: PremierLeagueService) { }
}
