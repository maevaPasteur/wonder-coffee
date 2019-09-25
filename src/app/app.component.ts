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
        product_price: undefined,
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
                if (key === 'price') {
                    this.myCoffee.price += event.data.price;
                } else {
                    if (this.myCoffee[key] && Array.isArray(this.myCoffee[key])) {
                        if (this.myCoffee[key].includes(event.data[key])) {
                            this.removeA(this.myCoffee[key], event.data[key]);
                        } else {
                            this.myCoffee[key].push(event.data[key]);
                        }
                    } else {
                        this.myCoffee[key] = event.data[key];
                    }
                }
                console.log(this.myCoffee);
            }
        }
        if (event.step) {
            this.step = event.step;
        }
    }

    removeA(arr) {
        let what;
        let a = arguments;
        let L = a.length;
        let ax;
        while (L > 1 && arr.length) {
            what = a[--L];
            while ((ax = arr.indexOf(what)) !== -1) {
                arr.splice(ax, 1);
            }
        }
        return arr;
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
