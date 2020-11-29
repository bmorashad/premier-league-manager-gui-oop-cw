import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfessionalLeagueComponent } from './views/professional-league/professional-league.component'

const routes: Routes = [
	{path: 'premier-league', component: ProfessionalLeagueComponent},
	{path: '**', redirectTo: '/premier-league'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
