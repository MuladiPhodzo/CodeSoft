import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { MatIconModule } from '@angular/material/icon'


@Component({
  selector: 'app-favourites',
  imports: [CommonModule, MatIconModule],
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.css'
})
export class FavouritesComponent {
  favorites = [
    {
      name: 'Nike Air Max',
      description: 'Comfortable and stylish sneakers for daily wear.',
      image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/4c41a5dc-f55e-469d-b005-39f893eff27a/air-max-90-shoes-DdDgq1.png',
      price: 999.99
    },
    {
      name: 'Adidas Ultraboost',
      description: 'Performance running shoes with responsive cushioning.',
      image: 'https://via.placeholder.com/200',
      price: 1199.99
    }
  ];
  
  removeFromFavorites(item: any) {
    this.favorites = this.favorites.filter(fav => fav !== item);
  }
  

}
