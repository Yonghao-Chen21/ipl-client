import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CbookComponent } from './cbook/cbook.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { IplstatComponent } from './iplstat/iplstat.component';

const routes: Routes = [

    {
      path:'',
      component:DatabindingComponent,
      pathMatch:'full'
    },
    {
      path:'databinding',
      component:DatabindingComponent
    },
    {
      path:'iplstat',
      component:IplstatComponent
    },{
      path:'cbook',
      component:CbookComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
