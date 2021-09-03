import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { MyLazyComponentComponent } from '../my-lazy-component/my-lazy-component.component';
import { LoginServiceService } from 'src/app/login-service.service';
import { SubLazyComponent } from '../my-lazy-component/sub-lazy/sub-lazy.component';

const routes: Routes = [

  {path:'',component:MyLazyComponentComponent ,canLoad: [LoginServiceService]},
  {path:'Dettaglio',component:SubLazyComponent} 
 
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModuleModule { }
