import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonUiModule } from '../common-ui/common-ui.module'
import { GeneratedMatchComponent } from './generated-match/generated-match.component';
import { ProfessionalLeagueComponent } from './professional-league/professional-league.component';
import { PremierLeagueDetailsModule } from '../premier-league-details/premier-league-details.module';



@NgModule({
  declarations: [ProfessionalLeagueComponent, GeneratedMatchComponent],
  imports: [
    CommonModule,
	PremierLeagueDetailsModule,
	CommonUiModule
  ],
  exports: [
	  ProfessionalLeagueComponent
  ]
})
export class ViewsModule { }
