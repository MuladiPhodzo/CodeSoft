import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { Delivery, ShippingService } from '../../services/shipping.service'
import { Product, ProductService } from '../../services/product.service';

export interface CartProd {
  product: Product,
  count: number
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  products: Product[] = [];
  cartItems: CartProd[] = [];

  constructor(
    private shipping: ShippingService,
    private product: ProductService
  ) {}

  ngOnInit(): void {
    this.products = this.shipping.getCartList();

    // Optional: Initialize with 1 count for each product in cart
    this.products.forEach(prod => {
      this.cartItems.push({ product: prod, count: 1 });
    });
  }

  getTotal(): number {
    return this.cartItems.reduce((sum, item) => sum + Number(item.product.price) * item.count, 0);
  }

  addToCart(productID: number) {
    const existing = this.cartItems.find(item => item.product.id === productID);
    if (existing) {
      existing.count += 1;
    } else {
      const prod = this.product.getProdById(productID);
      if (prod) {
        this.cartItems.push({ product: prod, count: 1 });
      }
    }
  }

  removeItem(itemToRemove: CartProd): void {
    this.cartItems = this.cartItems.filter(item => item !== itemToRemove);
  }
}
