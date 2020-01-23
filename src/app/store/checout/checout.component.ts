import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Client } from 'src/app/model/client.model';
import { OrderService } from 'src/app/model/order.service';
import { Router } from '@angular/router';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-checout',
  templateUrl: './checout.component.html',
  styleUrls: ['./checout.component.scss']
})
export class ChecoutComponent implements OnInit {

  constructor(private orders: OrderService,
              private route: Router,
              private cartServ: CartService) { }

  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
    });
  }

  public completeOrder(): void {
    if (this.form.valid) {
      const client = new Client(
        this.form.get('name').value,
        this.form.get('address').value,
      );

      this.orders.setClient(client);
      this.orders.sendOrder().subscribe(() => {
      this.cartServ.clearCard();
      this.route.navigate(['store']);
      alert('Success');
      });
    }
  }

}
