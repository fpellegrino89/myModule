import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCustomComponentComponent } from './my-custom-component/my-custom-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MyCustomComponentComponent
  ],
  imports: [
    CommonModule,
     FormsModule,    
    ReactiveFormsModule

  ]
})
export class MyCustomModule { }
