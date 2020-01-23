import { Component, OnInit } from '@angular/core';
import { ProductsRepositoryService, Product } from 'src/app/model/products-repository.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: "app-edit-dialog",
  templateUrl: "./edit-dialog.component.html",
  styleUrls: ["./edit-dialog.component.scss"]
})
export class EditDialogComponent implements OnInit {
  constructor(
    private ds: ProductsRepositoryService,
    private router: Router,
    public thisDialogRef: MatDialogRef<EditDialogComponent>
  ) {}

  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl("", Validators.required),
      price: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
      category: new FormControl("", Validators.required)
    });

    this.form.patchValue(this.ds.editItem); 
  }

  public send() {
    if (this.form.valid) {
      const prod = new Product(
        this.form.get("name").value,
        this.form.get("category").value,
        this.form.get("description").value,
        this.form.get("price").value,
        this.ds.editItem.id
      );

      console.log(prod);
      this.ds.editProduct(prod).subscribe(() => {
        console.log("item changed");
        this.thisDialogRef.close();
      });
    }
  }

  public close() {
    this.thisDialogRef.close();
  }
}
