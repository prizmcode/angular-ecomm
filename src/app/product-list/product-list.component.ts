import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { QuillingService } from '../quilling.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products:Product[] = [];
  constructor(public service: QuillingService, private route: ActivatedRoute) {
    this.service = service;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      const cat = paramMap.get('cat');
      if (cat != undefined) {
        //Your code is here
      }
    });
  }
}
