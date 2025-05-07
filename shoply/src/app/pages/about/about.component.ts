import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  team = [
    { name: 'Lebo Mokoena', role: 'Founder & CEO', image: 'https://via.placeholder.com/100'},
    { name: 'Sipho Khumalo', role: 'CTO', image: 'https://via.placeholder.com/100' },
    { name: 'Thabo Dlamini', role: 'Product Manager', image: 'https://via.placeholder.com/100' },
    { name: 'Nomsa Nkosi', role: 'Lead Designer', image: 'https://via.placeholder.com/100' },
    { name: 'Kabelo Sithole', role: 'Developer', image: 'https://via.placeholder.com/100' }
  ];
  

}
