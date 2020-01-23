import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store/store.component';
import { ModelModule } from '../model/model.module';
import { CartComponent } from './cart/cart.component';
import { ChecoutComponent } from './checout/checout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../admin/login/login.component';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from '../admin/products/products.component';

@NgModule({
declarations: [StoreComponent, CartComponent, ChecoutComponent/*, LoginComponent, ProductsComponent*/],
  imports: [
    CommonModule,
    ModelModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class StoreModule { }
