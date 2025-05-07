import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orders',
  imports: [CommonModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  orders = [
    {
      id: 'A1024',
      date: '2025-05-01',
      status: 'Delivered',
      total: 199.99,
      items: [
        { name: 'Running Shoes', quantity: 1, image: 'https://via.placeholder.com/50' },
        { name: 'Socks Pack', quantity: 2, image: 'https://via.placeholder.com/50' }
      ]
    },
    {
      id: 'A1025',
      date: '2025-05-05',
      status: 'Pending',
      total: 89.50,
      items: [
        { name: 'T-Shirt', quantity: 1, image: 'https://via.placeholder.com/50' }
      ]
    }
  ];
}
