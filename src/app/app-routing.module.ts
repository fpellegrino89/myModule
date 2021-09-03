import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginServiceService } from './login-service.service';
import { MyCustomComponentComponent } from './my-custom/my-custom-component/my-custom-component.component';


const routes: Routes = [
  {path:'', redirectTo: 'home ',pathMatch:'full' ,canLoad: [LoginServiceService]},
  {path:'home',component:MyCustomComponentComponent,canLoad: [LoginServiceService]},
  { path: 'lazy', loadChildren: () => import('./my-lazy/my-lazy.module').then(m => m.MyLazyModule) ,canLoad: [LoginServiceService] },
  { path: 'Profile', loadChildren: () => import('./my-lazy-profile/my-lazy-profile.module').then(m => m.MyLazyProfileModule) ,canLoad: [LoginServiceService]},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
