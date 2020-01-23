import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

export class Product {
  constructor(
    public name: string,
    public category: string,
    public description: string,
    public price: number,
    public id?: number
  ) {}
}

@Injectable()
export class ProductsRepositoryService {
  constructor(private http: HttpClient) {}

  public editItem: Product;

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:3000/products/");
  }

  public getProduct(id: number): Observable<Product> {
    return this.http.get<Product>("http://localhost:3000/products/" + id);
  }

  public deleteProduct(id: number): Observable<any> {
    return this.http.delete("http://localhost:3000/products/" + id);
  }

  public addProduct(item: Product): Observable<any> {
    return this.http.post("http://localhost:3000/products/", item);
  }

  public editProduct(item: Product): Observable<any> {
    return this.http.put("http://localhost:3000/products/" + item.id, item);
  }
}
