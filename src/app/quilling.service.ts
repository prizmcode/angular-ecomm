import { Injectable } from '@angular/core';
import * as data from './data.json';
import { Product } from './product';
import { ShoppingCartProduct } from './shopping-cart';
import { ShoppingCart } from './top-menu/ShoppingCart';
@Injectable({
  providedIn: 'root'
})


export class QuillingService {

  categories = [
    `Animal`,
    `Baby`,
    `Birthday`,
    `Congratulation`,
    // `Father's Day`,
    `Graduation`,
    `Holidays`,
    // `Mother's Day`,
    `Nature`,
    `Scenery`,
    `Thank you`,
    // `Valetine`
  ];

  products: any = (data as any).default;
  filteredProducts: Product[] = [];
  shoppingCart: ShoppingCart = new ShoppingCart();
  total: number = 0;

  constructor() {
  }

  shuffleArray = (array: Array<any>) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  /**
   * To avoid Typescript error please use ! to indicate the variable can be null
   * example: this.shoppingCart!.addProduct ....
   * @param product 
   */
  addProduct = (product: Product) => {
    //Your code is here

  }

  removeProduct = (product: Product) => {
    //Your code is here
  }

  getNewCount = () => {
    //Your code is here
  }

  removeAllProducts = (id: string) => {
    //Your code is here
  }

  getTotalCost = () => {
    //Your code is here
    //Make sure to replace the 0 with your actual code
    return 0;
  }
}
