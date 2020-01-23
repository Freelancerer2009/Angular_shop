import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });
  }

  public send() {
    console.log("send");
    if (this.form.valid) {
      const isAuth = this.authService.login(
        this.form.get("login").value,
        this.form.get("password").value
      );

      if (isAuth) {
        this.router.navigate(["/products"]);
      } else {
        alert("wrong password");
      }
    } else {
      alert('form invalid');
    }
  }
}
