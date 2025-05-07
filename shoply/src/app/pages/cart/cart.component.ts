import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems = [
    { name: 'Sneakers', price: 59.99, quantity: 1, image: 'https://via.placeholder.com/80' },
    { name: 'T-Shirt', price: 25.00, quantity: 2, image: 'https://via.placeholder.com/80' }
  ];
  
  getTotal(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
  
  removeItem(itemToRemove: any): void {
    this.cartItems = this.cartItems.filter(item => item !== itemToRemove);
  }
  
}
