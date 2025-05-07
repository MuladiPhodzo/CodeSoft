import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  // Add any properties or methods needed for the profile component here
  user = {
    name: 'John Doe',
    email: 'jon.doe@gmail.com',
    phone: '+1234567890',
  }
  orders = [
    { id: 1, date: '2023-10-01', total: 100 },
    { id: 2, date: '2023-10-02', total: 200 },
    { id: 3, date: '2023-10-03', total: 300 },
  ];
  // Add any methods to handle user actions, like updating profile or viewing orders
  updateProfile() {
    // Logic to update user profile
    console.log('Profile updated:', this.user);
  }
  viewOrder(orderId: number) {
    // Logic to view order details
    console.log('Viewing order:', orderId);
  }
}
