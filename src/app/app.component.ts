import {Component, OnInit} from '@angular/core';

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
        intensity: undefined,
        size: undefined,
        ingredient: [],
        topping: [],
        price: 0
    };

    message: string;

    public editMyObject = (event) => {
        this.myCoffee.product_category = event.data.product_category;
        console.log('edit my object coffee');
        console.log(this.myCoffee);
        if (this.step) {
            this.step = event.step;
            console.log('step', this.step);
        }
    }

    ngOnInit() {
        console.log('init');
    }

}
