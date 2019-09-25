import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {DataService} from '../../../services/data.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

    product: any;

    @Input() inputData: any;
    @Output() sendBackData = new EventEmitter();

    constructor(private data: DataService) {
    }

    ngOnInit() {
      this.data.getProducts().subscribe(data => {
              this.product = data[0].category.find(c => c.name === this.inputData.product_category).products;
              console.log(this.product);
          }
      );
    }

}
