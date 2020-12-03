import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PremierLeagueDetailsComponent } from './premier-league-details/premier-league-details.component'

const routes: Routes = [
	{path: 'premier-league', component: PremierLeagueDetailsComponent},
	{path: '**', redirectTo: '/premier-league'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
