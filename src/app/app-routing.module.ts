import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store/store.component';
import { CartComponent } from './store/cart/cart.component';
import { ChecoutComponent } from './store/checout/checout.component';
import { LoginComponent } from './admin/login/login.component';
import { ProductsComponent } from './admin/products/products.component';
import { AuthGuard } from './admin/auth.guard';


const routes: Routes = [
  { path: 'store', component: StoreComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: ChecoutComponent },
  { path: 'login', component: LoginComponent},
  { path: 'products', component: ProductsComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: 'store' },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
