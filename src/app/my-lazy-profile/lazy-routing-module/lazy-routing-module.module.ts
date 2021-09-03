import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { MyLazyProfileComponentComponent } from '../my-lazy-profile-component/my-lazy-profile-component.component';
import { LoginServiceService } from 'src/app/login-service.service';
import { SubLazyComponent } from '../my-lazy-profile-component/sub-lazy/sub-lazy.component';

const routes: Routes = [

  {path:'',component:MyLazyProfileComponentComponent ,canLoad: [LoginServiceService]},
 
 
]; 

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModuleModule { }
