import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PremierLeagueComponent } from './premier-league/premier-league.component'

const routes: Routes = [
	{path: 'u18', component: PremierLeagueComponent},
	{path: 'u23', component: PremierLeagueComponent},
	{path: '/', component: PremierLeagueComponent},
	{path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
