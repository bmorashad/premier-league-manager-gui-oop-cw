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
	  this.matches = this.matchService.getAllMatches()
  }
  loadClubs() {
	  this.footballClubs = this.footballClubService.getAllFootballClubs()
  }

  ngOnInit(): void {
	  this.loadClubs()
	  this.loadMatches()
  }

}
