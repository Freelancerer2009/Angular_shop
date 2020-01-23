import { Component, OnInit } from '@angular/core';
import { ProductsRepositoryService, Product } from 'src/app/model/products-repository.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {

  constructor(private ds: ProductsRepositoryService, private router: Router,
              public thisDialogRef: MatDialogRef<AddDialogComponent>) { }

  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl("", Validators.required),
      price: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
      category: new FormControl("", Validators.required)
    });
  }

  public send() {
    if (this.form.valid) {
      const prod = new Product(
        this.form.get('name').value,
        this.form.get('category').value,
        this.form.get('description').value,
        this.form.get('price').value
      );
      
      console.log(prod);
      this.ds.addProduct(prod).subscribe(() => {
        console.log('item added');
        this.thisDialogRef.close();
      });
    }
  }

  public close() {
   this.thisDialogRef.close();
  }

}
