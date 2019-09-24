import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {DataService} from '../../../services/data.service';
import {NavigationService} from '../../../services/navigation.service';

@Component({
    selector: 'app-product-category',
    templateUrl: './product-category.component.html',
    styleUrls: ['./product-category.component.sass']
})
export class ProductCategoryComponent implements OnInit {

    category: any;

    @Output() sendBackData = new EventEmitter();

    constructor(private data: DataService, private navigation: NavigationService) {
    }

    ngOnInit() {
        this.data.getCategory().subscribe(data => {
                this.category = data[0].category;
                console.log(this.category);
            }
        );
    }

    navTo(e) {
        this.navigation.gotToStep(e);
    }
}
