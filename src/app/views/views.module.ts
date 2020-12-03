import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonUiModule } from '../common-ui/common-ui.module'
import { GeneratedMatchComponent } from './generated-match/generated-match.component';
import { PremierLeagueComponent } from './premier-league/premier-league.component';
import { PremierLeagueModule } from '../premier-league/premier-league.module';



@NgModule({
  declarations: [PremierLeagueComponent, GeneratedMatchComponent],
  imports: [
    CommonModule,
	PremierLeagueModule,
	CommonUiModule
  ],
  exports: [
	  PremierLeagueComponent
  ]
})
export class ViewsModule { }
