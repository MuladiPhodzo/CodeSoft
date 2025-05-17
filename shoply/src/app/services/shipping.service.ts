import { Injectable } from '@angular/core';
import { Product, ProductService } from '../services/product.service'


export interface Delivery {
  productId: number,
  location: string,
  ETA?: Date,
  status?: 'In Transit' | 'Dispatched' | 'Delivered' | 'Pending'| 'Cart';
  carrier?: string;
}
@Injectable({
  providedIn: 'root'
})
export class ShippingService {
  products: Product[] = []
  product!: ProductService
  deliveries: Delivery[] = [
    {
      productId: 1,
      location: 'Cape Town Warehouse',
      ETA: new Date('2025-05-19T08:30:00'),
      status: 'In Transit',
      carrier: 'DHL Express'
    },
    {
      productId: 2,
      location: 'Johannesburg Distribution Center',
      ETA: new Date('2025-05-17T13:00:00'),
      status: 'Dispatched',
      carrier: 'Aramex'
    },
    {
      productId: 3,
      location: 'Durban Hub',
      ETA: new Date('2025-05-22T09:15:00'),
      status: 'Pending',
      carrier: 'Fastway'
    },
    {
      productId: 4,
      location: 'Port Elizabeth Warehouse',
      ETA: new Date('2025-05-21T11:00:00'),
      status: 'In Transit',
      carrier: 'The Courier Guy'
    },
    {
      productId: 5,
      location: 'Bloemfontein Distribution Center',
      ETA: new Date('2025-05-18T16:45:00'),
      status: 'Delivered',
      carrier: 'Paxi'
    },
    {
      productId: 6,
      location: 'Bloemfontein Distribution Center',
      ETA: new Date('2025-05-18T16:45:00'),
      status: 'Cart',
    },
    {
      productId: 7,
      location: 'Bloemfontein Distribution Center',
      status: 'Cart',
    },
    {
      productId: 8,
      location: 'Bloemfontein Distribution Center',
      status: 'Cart'
    }
  ];

  ls: Product[] = []

  getDeliveries():Delivery[]{
    return this.deliveries
  }

  getProducts(): Product[] | undefined {
    return this.product.getProdList()
  }

  getDeliverById(productId: number): Delivery| undefined {
    return this.deliveries.find(p => p.productId === productId)
  }

  getCartList(): Product[] {
    
    for (let p=0; p<=this.deliveries.length; p++){
      if(this.deliveries[p].status === 'Cart'){
        this.ls.push(this.products[p])
      }
    }
    return this.ls
  }

}
