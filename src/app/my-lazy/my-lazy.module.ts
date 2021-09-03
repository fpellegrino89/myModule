import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyLazyComponentComponent } from './my-lazy-component/my-lazy-component.component';
import { LazyRoutingModuleModule } from './lazy-routing-module/lazy-routing-module.module';
import { SubLazyComponent } from './my-lazy-component/sub-lazy/sub-lazy.component';



@NgModule({
  declarations: [
    MyLazyComponentComponent,
    SubLazyComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingModuleModule
  ]
})
export class MyLazyModule { }
