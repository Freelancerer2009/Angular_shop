import { Injectable } from '@angular/core';
import { Order } from './order.model';
import { Line } from './line.model';
import { Client } from './client.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private currentLines: Line[];
  private orderTotal: number;
  private currentClient: Client;

  constructor(private http: HttpClient) { }

  public setLines(ln: Line[]) {
    this.currentLines = ln;
  }

  public setTotal(total: number) {
    this.orderTotal = total;
  }

  public setClient(client: Client) {
    this.currentClient = client;
  }

  private createOrder(): Order {
    return new Order(this.currentLines, this.orderTotal, this.currentClient);
  }

  public sendOrder(): Observable<any> {
    const body: Order = this.createOrder();
    console.log(body);

    return this.http.post<any>('http://localhost:3000/orders/', body);
  }

  public getOrders(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/orders/');
  }


}
