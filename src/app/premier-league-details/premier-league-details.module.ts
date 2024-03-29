import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandingsTableComponent } from './standings-table/standings-table.component';
import { PremierLeagueDetailsComponent } from './premier-league-details.component';
import { CommonUiModule } from '../common-ui/common-ui.module';
import { MatchDetailCardComponent } from './match-detail-card/match-detail-card.component';
import { GenerateMatchButtonComponent } from './generate-match-button/generate-match-button.component';
import { MatchListComponent } from './match-list/match-list.component';



@NgModule({
  declarations: [StandingsTableComponent, PremierLeagueDetailsComponent, MatchDetailCardComponent, GenerateMatchButtonComponent, MatchListComponent],
  imports: [
    CommonModule,
	CommonUiModule
  ],
  exports: [
	  PremierLeagueDetailsComponent
  ]
})
export class PremierLeagueDetailsModule { }
