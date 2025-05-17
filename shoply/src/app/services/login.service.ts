import { Injectable } from '@angular/core';
import { Product } from '../services/product.service'


export interface User{
  name: string,
  email:string,
  phone?: string
  password?: string
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  user: User = {
    name: '',
    email: '',
    phone: '',
  }

  products: Product[] = []

  login(name: string, email: string, phone: string){
    this.user.name = name
    this.user.email = email
    this.user.phone = phone
  }

  logout(){
    this.user.name = ''
    this.user.email = ''
    this.user.phone = ''
  }
  getUser(): User{
    return this.user
  }
}
