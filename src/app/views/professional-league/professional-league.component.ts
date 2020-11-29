import { Component, OnInit } from '@angular/core';
import { FootballClubService } from '../../shared/services/football-club.service';
import { MatchService } from '../../shared/services/match.service';
import { IMatch } from '../../dto/Match';
import { IFootballClub } from '../../dto/FootballClub';

@Component({
  selector: 'app-professional-league',
  templateUrl: './professional-league.component.html',
  styleUrls: ['./professional-league.component.css']
})
export class ProfessionalLeagueComponent implements OnInit {
	footballClubs: IFootballClub[] = [];
	matches: IMatch[] = [];

  constructor(private footballClubService: FootballClubService, private matchService: MatchService) { }

  loadMatches() {
	  this.matchService.all()
      .subscribe(res => {
		  if(res.status == 1) {
			  console.log(res);
			  this.matches = res.data.matches;
			  console.log(this.matches);
		  }
	  });
  }
  loadClubs() {
	  this.footballClubService.all()
      .subscribe(res => {
		  if(res.status == 1) {
			  this.footballClubs = res.data.footballClubs;
		  }
	  });
  }

  ngOnInit(): void {
	  this.loadMatches()
	  this.loadClubs()
  }

}
