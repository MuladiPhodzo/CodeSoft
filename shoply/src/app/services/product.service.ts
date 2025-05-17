import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Product {
  id: number,
  name: string,
  class: string,
  size: string,
  price: string,
  count: number,
  flags: string[],
  image: string

}

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  products: Product[] = [
    {
      id: 1,
      name: 'Nike Air Max 270',
      class: 'Footwear - Men',
      size: 'EU 44',
      price: '1590',
      count: 20,
      flags: ['Black', '2023', 'Popular'],
      image: 'data:image/webp;base64,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'
    },
    {
      id: 2,
      name: 'Adidas Ultraboost',
      class: 'Footwear - Men',
      size: 'EU 43',
      price: '1870',
      count: 15,
      flags: ['White', '2024', 'On Sale'],
      image: 'data:image/jpeg;base64,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'
    },
    {
      id: 3,
      name: 'Puma RS-X',
      class: 'Footwear - Women',
      size: 'EU 39',
      price: '1350',
      count: 12,
      flags: ['Multicolor', '2022'],
      image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/391173/01/sv01/fnd/PNA/fmt/png'
    },
    {
      id: 4,
      name: 'New Balance 574',
      class: 'Footwear - Women',
      size: 'EU 38',
      price: '1500',
      count: 25,
      flags: ['Grey', '2021', 'Classic'],
      image: 'https://nb.scene7.com/is/image/NB/wl574evg_nb_02_i?$pdpflexf2$&wid=440&hei=440'
    },
    {
      id: 5,
      name: 'Converse Chuck Taylor',
      class: 'Footwear - Unisex',
      size: 'EU 42',
      price: '7000',
      count: 15,
      flags: ['Red', '2023', 'Designer'],
      image: 'https://imagedelivery.net/2DfovxNet9Syc-4xYpcsGg/4b0f2820-6d80-4ce8-c216-dc87b17bcd00/product'
    },
    { 
      id: 6,
      name: 'Sneakers',
      class: 'footwear - men',
      size: 'EU 42',
      price: '59.99',
      count: 12,
      flags: ['off-white', '2024'],
      image: 'https://via.placeholder.com/80' },
    { 
      id: 7,
      name: 'cap',
      class: 'headwear - unisex',
      size: 'medium',
      price: '25.00',
      count: 232,
      flags: ['multicolor', '2022'],
      image: 'https://via.placeholder.com/80' }
  
  ];
  
  createProd(product : Product){
    this.products.push(product);
  }

  removeProd(productID : number, list: Product[]){
    for(let l=0; l<=this.products.length; l++){
      if (this.products[l].id == productID){
        list.splice(l,l)
      }
    }
  }

  getProdById(id: number): Product | undefined{
   return this.products.find(p => p.id === id)
  }

  getProdList(): Product[] | undefined {
    return this.products
  }
}
