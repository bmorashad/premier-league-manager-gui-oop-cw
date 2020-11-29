import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PremierLeagueComponent } from './views/premier-league/premier-league.component'

const routes: Routes = [
	{path: 'premier-league', component: PremierLeagueComponent},
	{path: '**', redirectTo: '/premier-league'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
