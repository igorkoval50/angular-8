import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-lists',
  templateUrl: './product-lists.component.html',
  styleUrls: ['./product-lists.component.scss']
})
export class ProductListsComponent implements OnInit {
  products = products;
  constructor() { }

  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will notified when the product goes on sale');
  }

  ngOnInit() {
  }

}
