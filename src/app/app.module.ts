import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PremierLeagueModule } from './premier-league/premier-league.module'
import { CommonUiModule } from './common-ui/common-ui.module'
import { ViewsModule } from './views/views.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	PremierLeagueModule,
	CommonUiModule,
	HttpClientModule,
	ViewsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
