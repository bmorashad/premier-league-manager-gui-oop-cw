import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PremierLeagueDetailsModule } from './premier-league-details/premier-league-details.module'
import { CommonUiModule } from './common-ui/common-ui.module'
import { ViewsModule } from './views/views.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	BrowserAnimationsModule,
    AppRoutingModule,
	PremierLeagueDetailsModule,
	CommonUiModule,
	HttpClientModule,
	ViewsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
