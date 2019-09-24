import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    title = 'wonder-coffee';
    step = 1;

    constructor() { }

    public myCoffee = {
        product_categoty: undefined,
        product_item: undefined,
        intensity: undefined,
        size: undefined,
        ingredient: [],
        topping: [],
        price: 0
    };

    message: string;

    public editMyObject = (event) => {
        this.message = event;
        console.log('edit my object');
        console.log(this.message);
    }

    ngOnInit() {
        console.log('init');
    }

}
