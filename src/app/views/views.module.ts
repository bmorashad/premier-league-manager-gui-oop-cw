import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonUiModule } from '../common-ui/common-ui.module'
import { GeneratedMatchComponent } from './generated-match/generated-match.component';
import { ProfessionalLeagueComponent } from './professional-league/professional-league.component';
import { SchoolDivisionLeagueComponent } from './school-division-league/school-division-league.component';
import { UniDivisionLeagueComponent } from './uni-division-league/uni-division-league.component';
import { PremierLeagueModule } from '../premier-league/premier-league.module';



@NgModule({
  declarations: [ProfessionalLeagueComponent, SchoolDivisionLeagueComponent, UniDivisionLeagueComponent, GeneratedMatchComponent],
  imports: [
    CommonModule,
	PremierLeagueModule,
	CommonUiModule
  ],
  exports: [
	  ProfessionalLeagueComponent,
	  SchoolDivisionLeagueComponent,
	  UniDivisionLeagueComponent
  ]
})
export class ViewsModule { }