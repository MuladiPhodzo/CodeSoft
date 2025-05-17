import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../services/login.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  user!: User;

  constructor(
    private fb: FormBuilder,
    private router: Router  ) {}

  ngOnInit(): void{
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    }); 
  }

  onLogin() {
    if (this.loginForm.valid) {  
      console.log('Login successful', this.loginForm.value);
      const { email, password } = this.loginForm.value;
      const username = email.split('@')[0]; // Extract username from email


      this.user = {
        name: username,
        email: email,
      };
      this.router.navigate(['/home'])
    } else {
      console.log('Login failed', this.loginForm.errors);
    }
  }
}
