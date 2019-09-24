import { Component, OnInit } from '@angular/core';
import {DataService} from 'src/app/services/data/data.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.sass']
})
export class ProductCategoryComponent implements OnInit {

  category: any;

    constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getCategory().subscribe(data => {
        this.category = data;
        console.log(this.category)
    });
  }

}
