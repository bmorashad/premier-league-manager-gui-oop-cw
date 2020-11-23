import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandingsTableComponent } from './standings-table/standings-table.component';
import { PremierLeagueComponent } from './premier-league.component';
import { CommonUiModule } from '../common-ui/common-ui.module';
import { GeneratedMatchComponent } from './generated-match/generated-match.component';
import { MatchDetailCardComponent } from './match-detail-card/match-detail-card.component';
import { GenerateMatchButtonComponent } from './generate-match-button/generate-match-button.component';
import { MatchListComponent } from './match-list/match-list.component';



@NgModule({
  declarations: [StandingsTableComponent, PremierLeagueComponent, GeneratedMatchComponent, MatchDetailCardComponent, GenerateMatchButtonComponent, MatchListComponent],
  imports: [
    CommonModule,
	CommonUiModule
  ],
  exports: [
	  PremierLeagueComponent
  ]
})
export class PremierLeagueModule { }
