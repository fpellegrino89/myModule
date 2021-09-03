import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyLazyProfileComponentComponent } from './my-lazy-profile-component/my-lazy-profile-component.component';
import { LazyProfileRoutingModuleModule } from './lazy-profile-routing-module/lazy-profile-routing-module.module';
import { SubLazyComponent } from './my-lazy-profile-component/sub-lazy/sub-lazy.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MyLazyProfileComponentComponent,
    SubLazyComponent
  ],
  imports: [
    CommonModule,
     FormsModule,    
    ReactiveFormsModule,
    LazyProfileRoutingModuleModule
  ]
})
export class MyLazyProfileModule { }
