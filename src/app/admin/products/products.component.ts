import { Component, OnInit } from "@angular/core";
import {
  Product,
  ProductsRepositoryService
} from "src/app/model/products-repository.service";
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';


@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {
  constructor(private ds: ProductsRepositoryService, private router: Router, private dialog: MatDialog) {
    ds.getProducts().subscribe(list => {
      this.currentList = list;
    });
  }

  currentList: Product[] = [];

  ngOnInit() {}

  editCart(item: Product) {
    this.ds.editItem = item;
    console.log(item);
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(() => {
      this.ds.getProducts().subscribe(list => {
        this.currentList = list;
      });
    });
  }

  deleteCart(item: Product) {
    this.ds.deleteProduct(item.id).subscribe(isOk => {
      this.ds.getProducts().subscribe(list => {
        this.currentList = list;
      });
    });
  }

  addNewProduct(): void {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(() => {
      this.ds.getProducts().subscribe(list => {
        this.currentList = list;
      });
    });
  }


}
