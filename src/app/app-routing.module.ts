import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CbookComponent } from './cbook/cbook.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { IplStatTeamRoleComponent } from './ipl-stat-team-role/ipl-stat-team-role.component';
import { IplstatComponent } from './iplstat/iplstat.component';
import { MaxPricePlayersComponent } from './max-price-players/max-price-players.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TeamStatComponent } from './team-stat/team-stat.component';

const routes: Routes = [

    {
      path:'',
      redirectTo:'databinding',
      pathMatch:'full'
    },
    {
      path:'databinding',
      component:DatabindingComponent
    },
    {
      path:'iplstat',
      component:IplstatComponent,
      children:[
          {
            path:'',
            redirectTo:'teamrolestat',
            pathMatch:'full'
          },
          {
            path:'teamrolestat',
            component:IplStatTeamRoleComponent
          },
          {
            path:'teamstat',
            component:TeamStatComponent
          },{
            path:"max-paid-players",
            component:MaxPricePlayersComponent
          }
      ]

        
    },{
      path:'cbook',
      component:CbookComponent
    },
    {
      path:'**',
      component:PageNotFoundComponent

    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }