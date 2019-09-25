import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {HeaderComponent} from './components/global/header/header.component';
import {HomeComponent} from './components/global/home/home.component';
import {SizeComponent} from './components/steps/size/size.component';
import {ProductCategoryComponent} from './components/steps/product-category/product-category.component';
import {ProductItemComponent} from './components/steps/product-item/product-item.component';
import {IntensityComponent} from './components/steps/intensity/intensity.component';
import {IngredientsComponent} from './components/steps/ingredients/ingredients.component';
import {ToppingsComponent} from './components/steps/toppings/toppings.component';
import {OrderComponent} from './components/steps/order/order.component';
import { ReturnComponent } from './components/global/return/return.component';
import { HomeBtnComponent } from './components/global/home-btn/home-btn.component';
import { PayeBtnComponent } from './paye-btn/paye-btn.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        SizeComponent,
        ProductCategoryComponent,
        ProductItemComponent,
        IntensityComponent,
        IngredientsComponent,
        ToppingsComponent,
        OrderComponent,
        ReturnComponent,
        HomeBtnComponent,
        PayeBtnComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AppRoutingModule,
        HttpClientModule,
        RouterModule.forRoot([])
    ],
    providers: [
        {
            provide: LocationStrategy, useClass: HashLocationStrategy
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
