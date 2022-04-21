import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { IplstatComponent } from './iplstat/iplstat.component';
import { CbookComponent } from './cbook/cbook.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import {HttpClientModule} from '@angular/common/http';
import { IplStatTeamRoleComponent } from './ipl-stat-team-role/ipl-stat-team-role.component';
import { MaxPricePlayersComponent } from './max-price-players/max-price-players.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TeamStatComponent } from './team-stat/team-stat.component';
import { TempComponent } from './temp/temp.component';
@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    IplstatComponent,
    CbookComponent,
    HeaderComponent,
    IplStatTeamRoleComponent,
    MaxPricePlayersComponent,
    PageNotFoundComponent,
    TeamStatComponent,
    TempComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2GoogleChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
