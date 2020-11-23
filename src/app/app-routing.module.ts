import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfessionalLeagueComponent } from './views/professional-league/professional-league.component'
import { SchoolDivisionLeagueComponent } from './views/school-division-league/school-division-league.component'
import { UniDivisionLeagueComponent } from './views/uni-division-league/uni-division-league.component'

const routes: Routes = [
	{path: 'professional', component: ProfessionalLeagueComponent},
	{path: 'u23', component: UniDivisionLeagueComponent},
	{path: 'u18', component: SchoolDivisionLeagueComponent},
	{path: '**', redirectTo: '/professional'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
