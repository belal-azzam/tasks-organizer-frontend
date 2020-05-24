import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {first} from "rxjs/operators";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'lib-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  returnUrl: string;
  error: string;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['aaa', Validators.required],
      password: ['12345678', Validators.required],
      email: ['aaa@hotmail.com', Validators.email],

    });

    // reset login status
    this.authService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.authService.register(this.f.username.value, this.f.password.value, this.f.email.value)
      .pipe(first())
      .subscribe(data => {
        this.error = '';
        this.router.navigate(['/login']);
      }, error => {
        this.error = error;
      });
  }

}
