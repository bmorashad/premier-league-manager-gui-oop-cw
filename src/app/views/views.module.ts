import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonUiModule } from '../common-ui/common-ui.module'
import { GeneratedMatchComponent } from './generated-match/generated-match.component';
import { PremierLeagueComponent } from './premier-league/premier-league.component';
import { PremierLeagueDetailsModule } from '../premier-league-details/premier-league-details.module';



@NgModule({
  declarations: [PremierLeagueComponent, GeneratedMatchComponent],
  imports: [
    CommonModule,
	PremierLeagueDetailsModule,
	CommonUiModule
  ],
  exports: [
	  PremierLeagueComponent
  ]
})
export class ViewsModule { }
