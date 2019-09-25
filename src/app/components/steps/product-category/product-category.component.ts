import {Component, OnInit, OnDestroy, Input, Output, EventEmitter} from '@angular/core';
import {DataService} from '../../../services/data.service';

@Component({
    selector: 'app-product-category',
    templateUrl: './product-category.component.html',
    styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent implements OnInit {

    category: any;
    btn;

    @Input() inputData: any;
    @Output() sendBackData = new EventEmitter();

    constructor(private data: DataService) {
    }

    ngOnInit() {
        this.data.getCategory().subscribe(data => {
                this.category = data[0].category;
            }
        );
        this.btn = document.querySelector('.restart');
        if (this.btn) {
            this.btn.style.opacity = 0;
            this.btn.style.pointerEvents = 'none';
        }
    }

    ngOnDestroy() {
        if (this.btn) {
            this.btn.style.opacity = 1;
            this.btn.style.pointerEvents = 'auto';
        }
    }
}
