import { Injectable } from '@angular/core';
import { Product } from 'src/app/model/products-repository.service';
import { Line } from 'src/app/model/line.model';
import { StoreModule } from '../store.module';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() { }

  productLines: Line[] = [];
  total: number = 0;

  removeProduct(item: Line) {
    const index = this.productLines.indexOf(item);
    this.productLines.splice(index, 1);
    this.total = this.getTotal();
  }

  public addProduct(product: Product) {

    const curr = this.productLines.find(x => x.id === product.id);

    if (curr) {
      curr.quantity += 1;
      console.log(curr.quantity);
    }
    else {
      const line = new Line(
        product.name,
        1,
        product.price,
        this.calculateSubtotal(1, product.price),
        product.id
        );

      this.productLines.push(line);
    }

    this.total = this.getTotal();
  }

  private calculateSubtotal(price: number, quantity: number): number {
    return price * quantity;
  }

  private getTotal(): number {
    const t = this.productLines.map(line => line.subtotal).reduce((part, i) => part + i, 0);
    return t;
  }

  public getProductLines(): Line[] {
    return this.productLines;
  }

  public clearCard(): void {
    this.productLines = [];
    this.total = 0;
  }

}
