import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/global/header/header.component';
import { HomeComponent } from './components/global/home/home.component';
import { SizeComponent } from './components/steps/size/size.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { IntensityComponent } from './intensity/intensity.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { ToppingsComponent } from './toppings/toppings.component';
import { OrderComponent } from './order/order.component';

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
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
