import {Component, OnInit} from '@angular/core';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    title = 'wonder-coffee';
    public step = 1;

    constructor() { }

    public myCoffee = {
        product_category: undefined,
        product_item: undefined,
        product_stock: undefined,
        intensity: undefined,
        size: undefined,
        ingredient: [],
        topping: [],
        price: 0
    };

    public editMyObject = (event) => {
        // this.myCoffee.product_category = event.data.product_category;
        if (event.data) {
            for (const key of Object.keys(event.data)) {
                if (this.myCoffee[key] && Array.isArray(this.myCoffee[key])) {
                    this.myCoffee[key].push(event.data[key]);
                } else {
                    this.myCoffee[key] = event.data[key];
                }
                console.log(this.myCoffee);
            }
        }
        if (event.step) {
            this.step = event.step;
        }
    }

    ngOnInit() {
        // console.log('init');
        // console.log(this.myCoffee);
        // for (let [key, value] of Object.entries(this.myCoffee)) {
        //     console.log(value);
        //     //console.log(value.isArray());
        // }
        // console.log('ooo');
        // console.log(this.myCoffee['price']);
    }

}
