import { Component, OnInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ShippingService, Delivery } from '../../services/shipping.service'
import { User, LoginService } from '../../services/login.service'
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-profile',
  imports: [CommonModule, MatCardModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  constructor(
    private shipping: ShippingService,
    private login: LoginService,
    private product: ProductService
  ){}
  user!: User
  delivery: any = {}
  orders: Delivery[] = []
  
  ngOnInit(): void {
    this.orders = this.shipping.getDeliveries(); // for synchronous
    this.user = this.login.getUser()
  }
  updateProfile() {
    // Logic to update user profile
    console.log('Profile updated:', this.user);
  }
  viewOrder(orderId: number) {

    this.delivery = this.product.getProdById(orderId)
    console.log('Viewing order:', this.delivery);
  }
}
