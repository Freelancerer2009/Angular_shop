import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Product } from 'src/app/model/products-repository.service';
import { Line } from 'src/app/model/line.model';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/model/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private ds: CartService,
              private route: Router,
              private orders: OrderService
            ) {
   }

  public items: Line[] = [];
  public total: number = 0;

  ngOnInit() {
    this.items = this.ds.productLines;
    this.total = this.ds.total;
  }

  public goHome(): void {
    this.route.navigate(['/store']);
  }

  public removeLine(line: Line): void {
    this.ds.removeProduct(line);
    this.total = this.ds.total;
  }

  public checkout(): void {
    this.orders.setLines(this.items);
    this.orders.setTotal(this.total);
    this.route.navigate(['/checkout']);
  }

}
