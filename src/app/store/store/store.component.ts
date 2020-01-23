import { Component, OnInit } from '@angular/core';
import { ProductsRepositoryService, Product } from 'src/app/model/products-repository.service';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  // Router - для внутренней навигации
  constructor(private productRepository: ProductsRepositoryService,
              private router: Router,
              private dest: CartService) { }
  productList: Product[] = [];
  categoryList: string[];

  currentList: Product[] = [];

  public set: Set<string> | string[] = [];


  public changeCategory(cat: string) {

    if(cat)
      this.currentList = this.productList.filter(x => x.category === cat);
    else
      this.currentList = this.productList;
  }

  ngOnInit() {
    this.productRepository.getProducts().subscribe(
      (products: Product[]) => {
        this.productList = products;
        this.currentList = this.productList;
        const cats = this.productList.map(x => x.category);
        this.set = new Set(cats);
      }
    );
  }

  addProductToCart(item: Product) {
    console.log(item);
    this.dest.addProduct(item);
    this.router.navigate(['/cart']);
  }

}
