import { Component } from '@angular/core';
import { SidebarComponent } from './../../components/sidebar/sidebar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-home',
  imports: [SidebarComponent, CommonModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
