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
    this.shoppingCart.addProduct(product);
    this.getNewCount();
  }

  removeProduct = (product: Product) => {
    this.shoppingCart.removeProduct(product._id);
    this.getNewCount();
  }

  getNewCount = () => {
    const total = this.shoppingCart.products.size > 0
    ? Array.from(this.shoppingCart.products.values()).map(product => product.count).reduce((prev, curr) => prev + curr)
    : 0;
   this.total = total;
  }

  removeAllProducts = (id: string) => {
    this.shoppingCart.removeAllProduct(id);
    this.getNewCount();
  }

  getTotalCost = () => {
    const products = Array.from(this.shoppingCart.products.values());
    const totalCost = products.reduce((totalCost, product) => totalCost + (product.count * product.product.price), 0);
  return totalCost;
  }
}
