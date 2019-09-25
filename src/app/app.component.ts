import {Component, OnInit} from '@angular/core';
import {DataService} from './services/data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    title = 'wonder-coffee';
    public step = 1;
    ingredients;
    toppings;

    constructor(private data: DataService) {
    }

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

    /**
     * Update myCoffe object from childs component
     * @param event
     */
    public editMyObject = (event) => {
        if (event.data) {
            for (const key of Object.keys(event.data)) {
                if (key === 'price') {
                    this.myCoffee.price += event.data.price;
                } else {
                    if (this.myCoffee[key] && Array.isArray(this.myCoffee[key])) {
                        let activeItem = this.toppings.find(c => c.label === event.data[key]);
                        if (!activeItem) {
                            activeItem = this.ingredients.find(c => c.label === event.data[key]);
                        }
                        const itemPrice = activeItem.price * this.myCoffee.size;
                        if (this.myCoffee[key].includes(event.data[key])) {
                            this.myCoffee[key] = this.removeFromArray(this.myCoffee[key], event.data[key]);
                            this.myCoffee.price -= itemPrice;
                        } else {
                            this.myCoffee[key].push(event.data[key]);
                            this.myCoffee.price += itemPrice;
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

    /**
     * Remove from an array
     * @param arr : arrayx
     * @param a : value to remove
     * @return {any}
     */
    removeFromArray(arr, a) {
        const newArray = [];
        arr.forEach((value) => {
            if (value !== a) {
                newArray.push(value);
            }
        });
        return newArray;
    }


    ngOnInit() {
        this.data.getToppings().subscribe(data => {
                this.toppings = data;
                const newTopping = [];
                this.toppings.forEach((parent) => {
                    parent.toppings.forEach((item) => {
                        newTopping.push(item);
                    });
                });
                this.toppings = newTopping;
                console.log('new', newTopping);
            }
        );
        this.data.getIngredients().subscribe(data => {
                this.ingredients = data;
                const newIngredients = [];
                this.ingredients.forEach((parent) => {
                    parent.ingredients.forEach((item) => {
                        newIngredients.push(item);
                    });
                });
                this.ingredients = newIngredients;
                console.log('new', newIngredients);
            }
        );
    }

}
