import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) { }

    getProducts() {
        return this.http.get('../assets/json/products.json');
    }

    getCategory() {
        return this.http.get('../assets/json/products.json');
    }

    getIngredients() {
        return this.http.get('../assets/json/ingredients.json');
    }

    getIntensity() {
        return this.http.get('../assets/json/intensity.json');
    }

    getSizes() {
        return this.http.get('../assets/json/sizes.json');
    }

    getToppings() {
        return this.http.get('../assets/json/toppings.json');
    }

    getOptions() {
        return this.http.get('../assets/json/options.json');
    }
}
