import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRepositoryService } from './products-repository.service';



@NgModule({
  declarations: [],
  providers: [ProductsRepositoryService],
  imports: [
    CommonModule
  ]
})
export class ModelModule { }
